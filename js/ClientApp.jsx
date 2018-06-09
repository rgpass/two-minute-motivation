// @flow

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const appRoot = document.getElementById('app')

if (appRoot) {
  const renderApp = () =>
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      appRoot
    )
  renderApp()
} else {
  console.error('div with id of `app` not found, could not load')
}
