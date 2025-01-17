/**
 * @generated SignedSource<<f4d4af8533fb8b120fb029236c3abc42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionActionsFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteFragment" | "LikeFragment" | "QueueButtonFragment" | "DeleteButtonFragment">;
  readonly " $fragmentType": "QuestionActionsFragment";
};
export type QuestionActionsFragment = QuestionActionsFragment$data;
export type QuestionActionsFragment$key = {
  readonly " $data"?: QuestionActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuestionActionsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuestionActionsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "QuoteFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LikeFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "QueueButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteButtonFragment"
    }
  ],
  "type": "EventQuestion",
  "abstractKey": null
};

(node as any).hash = "2f2059e2937c61a6e289313523508f77";

export default node;
