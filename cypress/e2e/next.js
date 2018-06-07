describe('clicking Next', () => {
  it('changes the text', () => {
    cy.visit('/')
      .get('h2')
      .then($h2 => {
        const initialText = $h2.text()

        cy.get('.btn')
          .click()
          .get('h2')
          .should('not.contain', initialText)
      })
  })
})

describe('pressing Spacebar', () => {
  it('changes the text', () => {
    cy.visit('/')
      .get('h2')
      .then($h2 => {
        const initialText = $h2.text()

        cy.get('body')
          .type(' ')
          .get('h2')
          .should('not.contain', initialText)
      })
  })
})
