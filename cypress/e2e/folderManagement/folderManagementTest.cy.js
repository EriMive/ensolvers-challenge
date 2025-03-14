/// <reference types="cypress" />
import FolderManagementPage from '../../support/pageObjects/FolderManagementPage'
import LoginPage from '../../support/pageObjects/LoginPage'
import DashBoardPage from '../../support/pageObjects/DashBoardPage'

describe('Folder Management Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    cy.fixture('credentials').then((creds) => {
      LoginPage.fillUsername(creds.validUser.username)
      LoginPage.fillPassword(creds.validUser.password)
      LoginPage.submit()
      cy.contains('h2', 'Welcome to Ensolvers QA Challenge!').should('be.visible')
    })
  })

  it('Create a new Folder', () => {
    cy.fixture('folderData').then((folderData) => {
      const originalFolderName = folderData.originalFolderName

      DashBoardPage.getManageListMenu().click()
      FolderManagementPage.folderManagingBtn().click()
      cy.url().should('include', '/folder')
      cy.get('[data-cy="entityCreateButton"]').click()
      cy.get('[data-cy="name"]').should('be.visible').clear().type(originalFolderName, { delay: 100 })
      cy.get('[data-cy="entityCreateSaveButton"]').click()
    })
  })

  it('Edit Existing Folder', () => {
    cy.fixture('folderData').then((folderData) => {
      const updatedFolderName = folderData.updatedFolderName

      DashBoardPage.getManageListMenu().click()
      FolderManagementPage.folderManagingBtn().click()
      cy.url().should('include', '/folder')
      cy.get('[data-cy="entityEditButton"]').first().click()
      cy.get('[data-cy="name"]').should('be.visible').clear().type(updatedFolderName, { delay: 100 })
      cy.get('[data-cy="entityCreateSaveButton"]').click()
    })
  })

  it('Delete Existing Folder', () => {
    DashBoardPage.getManageListMenu().click()
    FolderManagementPage.folderManagingBtn().click()
    cy.url().should('include', '/folder')
    cy.get('[data-cy="entityDeleteButton"]').first().click()
    cy.get('[data-cy="entityConfirmDeleteButton"]').click()
  })
})
