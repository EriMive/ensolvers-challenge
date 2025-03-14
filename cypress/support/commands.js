import LoginPage from './pageObjects/LoginPage'

Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit()
  LoginPage.fillUsername(username)
  LoginPage.fillPassword(password)
  LoginPage.submit()
})
