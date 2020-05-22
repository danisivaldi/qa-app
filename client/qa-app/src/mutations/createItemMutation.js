import { commitMutation, graphql, } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation createItemMutation($question: String!, $answers: [String!]!, $correctAnswerId: Int!) {
        createItem(question: $question, answers: $answers, correctAnswerId: $correctAnswerId) {
            id
            question
            answers
            correctAnswerId
        }
    }
`

export default (question, answers, correctAnswerId, callback) => {
  const variables = {
    question,
    answers,
    correctAnswerId,
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