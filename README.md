# Ensolvers Challenge  🚀

[![Project Status](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-green)](https://github.com/EriMive/ensolvers-challenge)  

## Table of Contents  📋
1. [Project Description](#project-description)  
2. [Key Features](#key-features)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [Running Tests](#running-tests)  
6. [Project Structure](#project-structure)  
7. [Generating Reports](#generating-reports)  
8. [Contributions](#contributions)  
9. [License](#license)  


## Project Description  📖
This project is a solution to the challenge proposed by Ensolvers, which involves developing a web application with functionalities for managing tasks and folders. It includes automated end-to-end (E2E) tests using Cypress to ensure reliability and quality.

## Project Documentation  📄

- ## LINK TO TEST PLAN

 [TEST PLAN ENSOLVERS QA CHALLENGE.pdf](https://github.com/user-attachments/files/19254587/TEST.PLAN.ENSOLVERS.QA.CHALLENGE.pdf)
 
- ## LINK TO TEST CASES 

[TEST CASES.xlsx](https://github.com/user-attachments/files/19254601/TEST.CASES.xlsx)

---
Key objectives:  
- Create, edit, and delete tasks.  
- Organize tasks into folders.  
- Validate user interactions through automated testing.


## Key Features  
- **Task Management**:  
  - Add, edit, and delete tasks.  
  - Mark tasks as complete/incomplete.  
- **Folder Management**:  
  - Create and organize tasks into folders.  
  - Rename or delete folders.  
- **Automated Testing**:  
  - Full E2E test coverage with Cypress.  
  - HTML reports using Mochawesome.  

---

## Technologies Used  
- **Frontend**:  
  ![React](https://img.shields.io/badge/React-18.2.0-blue)  
- **Testing**:  
  ![Cypress](https://img.shields.io/badge/Cypress-12.17.0-brightgreen)  
  ![Mochawesome](https://img.shields.io/badge/Mochawesome-7.1.3-yellowgreen)  
- **Tools**:  
  ![Git](https://img.shields.io/badge/Git-2.40.0-orange)  

---

## Installation  
1. **Clone the repository**:  
   ```https://github.com/EriMive/ensolvers-challenge.git ```
## **Install dependencies:**
npm install  
## **Set up environment variables:**
Create a .env file in the root directory and add your configurations (e.g., API endpoints).
---

## Running Tests
Interactive Mode (GUI):

```bashnpx cypress open ``` 

Headless Mode (Terminal):

```bash npx cypress run```
---
## Generating Reports

``` npx cypress run --reporter mochawesome  ```

## Open the generated report:

```  bash open reports/mochawesome.html  ``` 

## AUTHENTICATION TEST

https://github.com/user-attachments/assets/8d31abdb-f2ab-4e9e-b0c3-54d048eeeb78

<img width="1454" alt="Captura de pantalla 2025-03-14 a la(s) 15 50 29" src="https://github.com/user-attachments/assets/79f4b92a-9930-4c4c-bcab-bef6a06fa26f" />


## FOLDER MANAGEMENT TEST

https://github.com/user-attachments/assets/26cf0f69-30c0-4289-9fb0-c6d674f13e93

<img width="1454" alt="Captura de pantalla 2025-03-14 a la(s) 15 50 04" src="https://github.com/user-attachments/assets/b2c8de2f-2956-4805-8260-ecfaefe70f7f" />



## TASK MANAGEMENT TEST

https://github.com/user-attachments/assets/72f349bd-212e-403c-aa02-e0cbb6d187f2

<img width="1454" alt="Captura de pantalla 2025-03-14 a la(s) 15 50 18" src="https://github.com/user-attachments/assets/fa9f0638-7b68-4774-8179-c3c6ae3279b8" />


## Pending Improvements 💡

### Project Structure and Code Organization
- [ ]  **Clear Module Separation:** Ensure that the folder structure is modular, separating source code, tests  using the Page Object Model, and configuration files.


### Automated Testing
- [ ] 🤖 **Use of Page Object Model (POM):** Organize E2E tests with POM to make them more readable and maintainable, easing updates of selectors when the UI changes.
- [ ] 🔍 **Selector Optimization:** Use specific `data-cy` attributes to select elements, reducing test fragility.
- [ ] 🔄 **Continuous Integration (CI):** Configure GitHub Actions or another CI system to automatically run tests and generate reports (videos, screenshots, Mochawesome).






