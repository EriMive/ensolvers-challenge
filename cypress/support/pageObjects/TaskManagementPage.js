class TaskManagementPage {
  getTaskList() {
    return cy.contains('button', 'Manage To-Do Items')
  }

  createNewTaskButton() {
    return cy.get('[data-cy="entityCreateButton"]')
  }

  fillTaskTitle(title) {
    cy.get('[data-cy="title"]').should('be.visible').clear().type(title, { delay: 100 })
  }

  fillTaskDescription(description) {
    cy.get('[data-cy="description"]').should('be.visible').clear().type(description, { delay: 100 })
  }

  fillTaskFolder(folder) {
    cy.get('[data-cy="folder"]').should('be.visible').clear().type(folder, { delay: 100 })
  }

  saveTaskBtn() {
    return cy.contains('button', 'Save')
  }

  // Selecciona el botón de edición del primer elemento
  editTaskBtn() {
    return cy.get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityEditButton"]').first()
  }

  // Botón para guardar la edición de una tarea
  saveEditTaskBtn() {
    return cy.get('[data-cy="save-entity"]')
  }

  clickRefresh() {
    return cy.contains('button', 'mr-2 btn btn-info').click()
  }
}

export default new TaskManagementPage()
