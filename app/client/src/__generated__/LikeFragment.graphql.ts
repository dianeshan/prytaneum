/**
 * @generated SignedSource<<f06847359d8404c2ba70ad2b136cb3ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LikeFragment$data = {
  readonly id: string;
  readonly isLikedByViewer: boolean | null;
  readonly " $fragmentType": "LikeFragment";
};
export type LikeFragment = LikeFragment$data;
export type LikeFragment$key = {
  readonly " $data"?: LikeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LikeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LikeFragment",
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
      "name": "isLikedByViewer",
      "storageKey": null
    }
  ],
  "type": "EventQuestion",
  "abstractKey": null
};

(node as any).hash = "7c54673ec18268c54b29b3720229a747";

export default node;
