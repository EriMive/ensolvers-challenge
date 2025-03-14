/// <reference types="cypress" />
import TaskManagementPage from '../../support/pageObjects/TaskManagementPage'
import LoginPage from '../../support/pageObjects/LoginPage'

describe('Task Management Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    cy.fixture('credentials').then((creds) => {
      LoginPage.fillUsername(creds.validUser.username)
      LoginPage.fillPassword(creds.validUser.password)
      LoginPage.submit()
      cy.contains('h2', 'Welcome to Ensolvers QA Challenge!').should('be.visible')
    })
  })

  it('Display of Existing Tasks', () => {
    TaskManagementPage.getTaskList().click()
    TaskManagementPage.createNewTaskButton().should('be.visible')
  })

  it('Creation of a New Task', () => {
    cy.fixture('taskData').then((data) => {
      const newTask = data.newTask
      TaskManagementPage.getTaskList().click()
      TaskManagementPage.createNewTaskButton().click()

      TaskManagementPage.fillTaskTitle(newTask.title, { delay: 100 })
      TaskManagementPage.fillTaskDescription(newTask.description, { delay: 100 })
      TaskManagementPage.saveTaskBtn().click()
    })
  })

  it('Editing of an Existing Task', () => {
    const updatedTitle = 'Tarea Actualizada'
    const updatedDescription = 'Descripción actualizada'

    TaskManagementPage.getTaskList().click()
    TaskManagementPage.editTaskBtn().click()

    TaskManagementPage.fillTaskTitle(updatedTitle)
    TaskManagementPage.fillTaskDescription(updatedDescription)
    TaskManagementPage.saveTaskBtn().click()
  })
})
