class LoginPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    register(firstname,lastName,password) {
     this.visit()
      const randomEmail= Math.random().toString(36).substring(2,15)+"@gmail.com";
      cy.get('.panel > .header > :nth-child(3) > a').click();      
      cy.get('input[id="firstname"]').type(firstname);
      cy.get('input[id="lastname"]').type(lastName);       
      cy.get('input[name="email"]').type(randomEmail);
      cy.get('#password').type(password);
      cy.get('input[name="password_confirmation"]').type(password);
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
      cy.get('.message-success > div').should('contain', 'Thank you for registering with Main Website Store.');

    }

    login(email, password) {
        this.visit();
        cy.get('.panel > .header > .authorization-link > a').click();  
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.base').should('have.text','Home Page')
      }
    }
  
    
  
  
  export const loginPage = new LoginPage();