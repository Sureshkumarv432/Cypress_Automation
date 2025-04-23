class SearchPage {
  
    searchForProduct(productName) {
      cy.get('input[id="search"]').type(productName).type('{downarrow}') 
      .type('{enter}');   
      
    }
  
    verifySearchResults(productName) {
      cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').each(($el) => {
        cy.wrap($el).should('contain', productName);        
      });
    }
  }
  
  export const searchPage = new SearchPage();