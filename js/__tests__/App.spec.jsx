import React from 'react'
import { render } from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import App from '../App'

jest.mock('../../data.json', () => {
  return { actions: [{ title: 'title1' }, { title: 'title2' }] }
})

describe('Clicking Next', () => {
  it('changes the Action', () => {
    const container = document.createElement('div')
    render(<App />, container)

    const currentAction = container.querySelector('h2').textContent

    const button = container.querySelector('button')
    Simulate.click(button)

    const newAction = container.querySelector('h2').textContent

    expect(newAction).not.toBe(currentAction)
  })

  it('never does the same action', () => {
    const container = document.createElement('div')
    render(<App />, container)

    const action0 = container.querySelector('h2').textContent
    const button = container.querySelector('button')

    Simulate.click(button)
    const action1 = container.querySelector('h2').textContent

    Simulate.click(button)
    const action2 = container.querySelector('h2').textContent

    Simulate.click(button)
    const action3 = container.querySelector('h2').textContent

    Simulate.click(button)
    const action4 = container.querySelector('h2').textContent

    Simulate.click(button)
    const action5 = container.querySelector('h2').textContent

    if (action0 === 'title1') {
      expect([action1, action2, action3, action4, action5]).toEqual([
        'title2',
        'title1',
        'title2',
        'title1',
        'title2',
      ])
    } else if (action0 === 'title2') {
      expect([action1, action2, action3, action4, action5]).toEqual([
        'title1',
        'title2',
        'title1',
        'title2',
        'title1',
      ])
    }
  })
})

describe('Shortcuts', () => {
  describe('when on a desktop', () => {
    it('tells the user to press Spacebar', () => {
      const container = document.createElement('div')
      render(<App />, container)

      expect(container.textContent.toLowerCase()).toContain('spacebar')
    })

    it('goes to the next action after pressing Spacebar', () => {
      const container = document.createElement('div')
      render(<App />, container)
      const app = container.firstChild

      const currentAction = app.querySelector('h2').textContent

      const event = new window.Event('keyup', { keyCode: 32 })
      document.dispatchEvent(event)

      const newAction = app.querySelector('h2').textContent

      expect(newAction).not.toBe(currentAction)
    })
  })

  describe('when on a mobile device', () => {
    it('does not mention the Spacebar shortcut', () => {
      // The presense of window.ontouchstart is how we determine if on mobile
      window.ontouchstart = {}

      const container = document.createElement('div')
      render(<App />, container)

      expect(container.textContent.toLowerCase()).not.toContain('spacebar')
    })
  })
})
