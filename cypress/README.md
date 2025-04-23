##  Cypress Automation Framework

This project is a **Cypress-based end-to-end (E2E) automation framework** designed for testing web applications. It uses the **Page Object Model (POM)** design pattern for scalable and maintainable test scripts.


##  Setup Instructions

Follow these steps to set up the project on your local machine:

1. Clone the Repository


git clone https://github.com/your-username/cypress-automation.git
cd cypress-automation

2.  Install Dependencies
npm install
 
Execution Guide
1. Open Cypress Test Runner (GUI Mode)
npx cypress open

2. Run All Tests in Headless Mode (CLI)
npx cypress run

3. Run a Specific Test File
npx cypress run --spec "cypress/e2e/01_login.cy.js"

Test Coverage:

Test File | Description
01_login.cy.js | Valid/invalid login flows
02_search.cy.js | Product search scenarios
03_wishlist.cy.js | Wishlist add/remove operations
04_order.cy.js | Complete product order lifecycle

Page Object Model (POM)
The pages/ directory contains JavaScript classes representing different pages of the application. Each class includes selectors and methods to interact with page elements.

Reporting & Screenshots
Screenshots of failed tests are saved in cypress/screenshots/.
Reports (if enabled via plugins like Mochawesome) will appear in cypress/reports/
