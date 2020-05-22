/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createItemMutationVariables = {|
  question: string,
  answers: $ReadOnlyArray<string>,
  correctAnswerId: number,
|};
export type createItemMutationResponse = {|
  +createItem: ?{|
    +id: string,
    +question: string,
    +answers: $ReadOnlyArray<string>,
    +correctAnswerId: number,
  |}
|};
export type createItemMutation = {|
  variables: createItemMutationVariables,
  response: createItemMutationResponse,
|};
*/


/*
mutation createItemMutation(
  $question: String!
  $answers: [String!]!
  $correctAnswerId: Int!
) {
  createItem(question: $question, answers: $answers, correctAnswerId: $correctAnswerId) {
    id
    question
    answers
    correctAnswerId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "question",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answers",
    "type": "[String!]!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "correctAnswerId",
    "type": "Int!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "answers",
        "variableName": "answers"
      },
      {
        "kind": "Variable",
        "name": "correctAnswerId",
        "variableName": "correctAnswerId"
      },
      {
        "kind": "Variable",
        "name": "question",
        "variableName": "question"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "createItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answers",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "correctAnswerId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "createItemMutation",
    "operationKind": "mutation",
    "text": "mutation createItemMutation(\n  $question: String!\n  $answers: [String!]!\n  $correctAnswerId: Int!\n) {\n  createItem(question: $question, answers: $answers, correctAnswerId: $correctAnswerId) {\n    id\n    question\n    answers\n    correctAnswerId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ab7c5657b86b10f7fd0e983561f7097';

module.exports = node;
