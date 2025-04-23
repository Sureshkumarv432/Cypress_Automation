import { has } from "lodash";

class ProductPage {
  
    goToCart() {
      cy.wait(2000);
      cy.get('.showcart').invoke('show').click();
    }
  
    placeOrder() {
      cy.get('.checkout').click();
      cy.wait(2000);
      cy.get('.new-address-popup > .action').click();
      cy.get("input[name='street[0]']").type("Dubai");
      cy.get("input[name='city']").type("Dubai");  
      cy.get("select[name='region_id']").select('Indiana');        
      cy.get("input[name='postcode']").type('987979');
      cy.get("input[name='telephone']").type('98797964564');
      cy.get('#shipping-save-in-address-book').click();
      cy.get('.modal-footer > .primary').click();
      cy.get("input[type='radio']").first().click();
      cy.get('.button').click();
      cy.wait(2000);
      cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
      cy.get('.base').contains('Thank you for your purchase');      
    }
  }
  
  export const productPage = new ProductPage();