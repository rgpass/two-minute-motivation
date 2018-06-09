import React from 'react'
import { render } from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import App from '../App'
import store from '../store'

function pressSpacebar() {
  const spacebarKeyCode = 32
  const event = new window.Event('keyup', { keyCode: spacebarKeyCode })
  document.dispatchEvent(event)
}

function renderApp() {
  const container = document.createElement('div')
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  )
  const button = container.querySelector('button')

  return {
    button,
    clickNext: () => Simulate.click(button),
    getActionText: () => container.querySelector('h2').textContent,
  }
}

function simulateMobile() {
  // The presense of window.ontouchstart is how we determine if on mobile
  // It is undefined on desktop
  window.ontouchstart = {}
}

export { pressSpacebar, renderApp, simulateMobile }
