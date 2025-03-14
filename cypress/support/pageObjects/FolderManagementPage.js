class FolderManagementPage {
  folderManagingBtn() {
    return cy.get(':nth-child(2) > .mr-2')
  }

  createNewFolderBtn() {
    return cy.get('[data-cy="entityCreateButton"]', { timeout: 10000 }).should('be.visible')
  }

  fillFolderName(name) {
    return cy.get('[data-cy="name"]').should('be.visible').clear().type(name, { delay: 100 })
  }

  saveFolderBtn() {
    return cy.get('[data-cy="entityCreateSaveButton"]').should('be.visible')
  }

  getFolderList() {
    return cy.get('[data-cy="folder-list"]')
  }

  getFolder(folderName) {
    return cy.contains('[data-cy="folder-item"]', folderName)
  }

  clickEditFolder(folderName) {
    return cy.get('[data-cy="entityEditButton"]').first
  }

  saveFolderChanges() {
    return cy.get('[data-cy="save-folder"]').click()
  }

  clickRefresh() {
    return cy.get('[data-cy="refresh-folders"]').click()
  }

  clickDeleteFolder(folderName) {
    return this.getFolder(folderName).find('[data-cy="delete-folder"]').click()
  }

  confirmDeletion() {
    return cy.get('[data-cy="confirm-delete-folder"]').click()
  }

  assignTaskToFolder(taskTitle, folderName) {
    cy.contains('[data-cy="task-item"]', taskTitle).find('[data-cy="assign-folder"]').click()
    cy.get('[data-cy="folder-dropdown"]').select(folderName)
    cy.get('[data-cy="confirm-assign-folder"]').click()
  }
}

export default new FolderManagementPage()
