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
      updater: (store) => {
        const payload = store.getRootField('createItem');
        const newId = payload.getValue('id');
        const newQuestion = payload.getValue('question');
        const newAnswers = payload.getValue('answers');
        const newCorrectAnswerId = payload.getValue('corectAnswerId');

        const item = store.get(newId)
        item.setValue(newId, 'id')
        item.setValue(newQuestion, 'question')
        item.setValue(newAnswers, 'answers')
        item.setValue(newCorrectAnswerId, 'correcAnswerId')
      },
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}