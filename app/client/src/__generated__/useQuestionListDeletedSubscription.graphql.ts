/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import {  } from "relay-runtime";
export type useQuestionListDeletedSubscriptionVariables = {
    eventId: string;
    connections: Array<string>;
};
export type useQuestionListDeletedSubscriptionResponse = {
    readonly questionDeleted: {
        readonly edge: {
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly position: number | null;
                readonly " $fragmentRefs": FragmentRefs<"QuestionAuthorFragment" | "QuestionContentFragment" | "QuestionStatsFragment">;
            };
        };
    };
};
export type useQuestionListDeletedSubscription = {
    readonly response: useQuestionListDeletedSubscriptionResponse;
    readonly variables: useQuestionListDeletedSubscriptionVariables;
};



/*
subscription useQuestionListDeletedSubscription(
  $eventId: ID!
) {
  questionDeleted(eventId: $eventId) {
    edge {
      cursor
      node {
        id
        position
        ...QuestionAuthorFragment
        ...QuestionContentFragment
        ...QuestionStatsFragment
      }
    }
  }
}

fragment QuestionAuthorFragment on EventQuestion {
  createdBy {
    id
    firstName
    avatar
  }
  createdAt
}

fragment QuestionContentFragment on EventQuestion {
  question
}

fragment QuestionStatsFragment on EventQuestion {
  id
  likedByCount
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "eventId",
    "variableName": "eventId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useQuestionListDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "EventQuestionEdgeContainer",
        "kind": "LinkedField",
        "name": "questionDeleted",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestionEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventQuestion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionAuthorFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionContentFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionStatsFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useQuestionListDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "EventQuestionEdgeContainer",
        "kind": "LinkedField",
        "name": "questionDeleted",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestionEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventQuestion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "deleteEdge",
                    "key": "",
                    "kind": "ScalarHandle",
                    "name": "id",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      }
                    ]
                  },
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "createdBy",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "avatar",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
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
                    "name": "likedByCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a1b07afb2e1cba8bb7ac9b5cf4c694ec",
    "id": null,
    "metadata": {},
    "name": "useQuestionListDeletedSubscription",
    "operationKind": "subscription",
    "text": "subscription useQuestionListDeletedSubscription(\n  $eventId: ID!\n) {\n  questionDeleted(eventId: $eventId) {\n    edge {\n      cursor\n      node {\n        id\n        position\n        ...QuestionAuthorFragment\n        ...QuestionContentFragment\n        ...QuestionStatsFragment\n      }\n    }\n  }\n}\n\nfragment QuestionAuthorFragment on EventQuestion {\n  createdBy {\n    id\n    firstName\n    avatar\n  }\n  createdAt\n}\n\nfragment QuestionContentFragment on EventQuestion {\n  question\n}\n\nfragment QuestionStatsFragment on EventQuestion {\n  id\n  likedByCount\n}\n"
  }
};
})();
(node as any).hash = '4088da27dfcc3760848e2aa8f55b023f';
export default node;
