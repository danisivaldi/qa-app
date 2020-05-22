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
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}