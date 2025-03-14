// cypress/integration/authentication.spec.js

/// <reference types="cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import DashBoardPage from '../../support/pageObjects/DashboardPage'

describe('Authentication Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Successful Login with Valid Credentials', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.fillUsername(creds.validUser.username)
      LoginPage.fillPassword(creds.validUser.password)
      LoginPage.submit()
      cy.contains('h2', 'Welcome to Ensolvers QA Challenge!').should('be.visible')
    })
  })

  it('Login Fails with Invalid Username', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.fillUsername(creds.invalidUser.username)
      LoginPage.fillPassword(creds.invalidUser.password)
      LoginPage.submit()

      // Validate error message for invalid user
      LoginPage.getErrorMessage().should('exist')
    })
  })

  it('Login Fails with Incorrect Password', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.fillUsername(creds.validUser.username)
      LoginPage.fillPassword(creds.invalidPassword.password)
      LoginPage.submit()
      LoginPage.getErrorMessage().should('exist')
    })
  })

  it('Login Fails with Empty Fields', () => {
    LoginPage.submit()
    cy.contains('You are logged in as').should('not.exist')
  })

  it('Login Fails with Empty Username', () => {
    LoginPage.fillPassword('user')
    LoginPage.submit()
    cy.contains('You are logged in as').should('not.exist')
  })

  it('Login Fails with Empty Password', () => {
    LoginPage.fillUsername('user')
    LoginPage.submit()
    cy.contains('You are logged in as').should('not.exist')
  })

  it('Successful Logout', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.visit()
      LoginPage.fillUsername(creds.validUser.username)
      LoginPage.fillPassword(creds.validUser.password)
      LoginPage.submit()
      DashBoardPage.verifyUserLoggedIn()
      DashBoardPage.logout()
      cy.contains('You are logged in as').should('not.exist')
    })
  })
})
