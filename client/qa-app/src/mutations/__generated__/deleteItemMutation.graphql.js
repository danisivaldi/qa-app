/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteItemMutationVariables = {|
  id: string
|};
export type deleteItemMutationResponse = {|
  +deleteItem: ?{|
    +id: string
  |}
|};
export type deleteItemMutation = {|
  variables: deleteItemMutationVariables,
  response: deleteItemMutationResponse,
|};
*/


/*
mutation deleteItemMutation(
  $id: ID!
) {
  deleteItem(id: $id) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "deleteItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "deleteItemMutation",
    "operationKind": "mutation",
    "text": "mutation deleteItemMutation(\n  $id: ID!\n) {\n  deleteItem(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87aedd6cdc3880764f74bcd4ded72c80';

module.exports = node;
