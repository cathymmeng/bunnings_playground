const requiredUser = require('../../../fixtures/users.json')

beforeEach(() => {
    cy.fixture('users.json').as('users')
})

context('Files', () => {
    beforeEach(() => {
      cy.visit('https://www.bunnings.com.au/')
    })
  
    beforeEach(() => {
      // load users.json fixture file and store
      // in the test context object
      cy.fixture('users.json').as('users')
    })
})

//TODO: fixture to replace manual user input login? multiple user types?
it('Allows general user to login, happiest path', () => {
    cy.get('#icon-account').click()
    cy.get('[data-locator=Button_SignIn]').click( position, 'topLeft' )
    // Error1020 Bunnings anti-attack error occur, production environment automatic login isn't allowed
    cy.get('#okta-form-title').contains('Sign in to your account')
    cy.get('#okta-signin-username').type('cathynandroid@gmail.com')
    cy.get('#okta-signin-password').type('Cathy#123{enter}')
    cy.get('#okta-signin-submit').click()
})