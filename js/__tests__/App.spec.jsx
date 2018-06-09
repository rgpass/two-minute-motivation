import { renderApp, pressSpacebar, simulateMobile } from '../test/utils'

jest.mock('../../data.json', () => ({
  actions: [{ title: 'title1' }, { title: 'title2' }],
}))

describe('Clicking Next', () => {
  it('changes the Action', () => {
    const { clickNext, getActionText } = renderApp()

    const currentAction = getActionText()

    clickNext()

    const newAction = getActionText()

    expect(newAction).not.toBe(currentAction)
  })

  it('never does the same action', () => {
    const { clickNext, getActionText } = renderApp()

    const action0 = getActionText()

    clickNext()
    const action1 = getActionText()

    clickNext()
    const action2 = getActionText()

    clickNext()
    const action3 = getActionText()

    clickNext()
    const action4 = getActionText()

    clickNext()
    const action5 = getActionText()

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
      const { button } = renderApp()
      expect(button.textContent.toLowerCase()).toContain('spacebar')
    })

    it('goes to the next action after pressing Spacebar', () => {
      const { getActionText } = renderApp()

      const currentAction = getActionText()

      pressSpacebar()

      const newAction = getActionText()

      expect(newAction).not.toBe(currentAction)
    })
  })

  describe('when on a mobile device', () => {
    it('does not mention the Spacebar shortcut', () => {
      simulateMobile()

      const { button } = renderApp()

      expect(button.textContent.toLowerCase()).not.toContain('spacebar')
    })
  })
})
