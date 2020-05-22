import { commitMutation, graphql, } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation deleteItemMutation($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`

export default (id, callback) => {
  const variables = {
      id
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: (store) => {
        const payload = store.getRootField('createItem');
        const id = payload.getValue('id');

        store.delete(id)
      },
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}