// @flow

import { UPDATE_ACTION } from './actions'

// Disabled because as we add more actions, this style can be emulated
// eslint-disable-next-line import/prefer-default-export
export function updateAction() {
  return { type: UPDATE_ACTION }
}
