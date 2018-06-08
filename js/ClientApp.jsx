// @flow

import React from 'react'
import { render } from 'react-dom'
import App from './App'

const appRoot = document.getElementById('app')

if (appRoot) {
  const renderApp = () => render(<App />, appRoot)
  renderApp()
} else {
  console.error('div with id of `app` not found, could not load')
}
