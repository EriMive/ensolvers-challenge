class LoginPage {
  visit() {
    cy.visit('https://qa-challenge.ensolvers.com')
  }

  fillUsername(username) {
    cy.get('[data-cy="username"]').clear()
    cy.get('[data-cy="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('[data-cy="password"]').clear().type
    cy.get('[data-cy="password"]').type(password)
  }

  submit() {
    cy.get('[data-cy="submit"]').click()
  }

  getErrorMessage() {
    return cy.get('[data-cy="loginError"]')
  }
}

export default new LoginPage()
