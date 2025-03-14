class DashboardPage {
  getHome() {
    return cy.get('a.nav-link.active').contains('Home')
  }

  getManageListMenu() {
    return cy.get('[data-cy="entity"]')
  }

  getAccountMenu() {
    return cy.get('[data-cy="accountMenu"]')
  }

  getLogoutButton() {
    return cy.get('[data-cy="logout"]')
  }

  logout() {
    this.getAccountMenu().click()
    this.getLogoutButton().click()
  }

  verifyUserLoggedIn() {
    cy.contains('div', 'You are logged in as').should('exist')
  }
}

export default new DashboardPage()
