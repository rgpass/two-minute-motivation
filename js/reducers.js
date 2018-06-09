// @flow

import { UPDATE_ACTION } from './actions'
import data from '../data.json'

const getRandomIndex = () => Math.floor(Math.random() * data.actions.length)
const actionForIndex = i => data.actions[i].title

const initialIndex = getRandomIndex()
const DEFAULT_STATE = {
  action: actionForIndex(initialIndex),
}

const updateAction = state => {
  let newIndex = getRandomIndex()
  let newAction = actionForIndex(newIndex)
  const oldAction = state.action

  while (newAction === oldAction) {
    newIndex = getRandomIndex()
    newAction = actionForIndex(newIndex)
  }

  return Object.assign({}, state, { action: newAction })
}

const rootReducer = (
  state: { action: string } = DEFAULT_STATE,
  action: { type: string }
) => {
  switch (action.type) {
    case UPDATE_ACTION:
      return updateAction(state)
    default:
      return state
  }
}

export default rootReducer
