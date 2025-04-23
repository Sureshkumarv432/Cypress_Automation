class WishlistPage {
    addToWishlist() {      
      cy.get('input[id="search"]').type('Hoodie').type('{downarrow}') 
      .type('{enter}');   
      cy.get('.product-item').first()
            //.trigger('mouseover')
            .find('.action.towishlist')
            .invoke('show')  
            .click({ force: true }); // Force click in case it’s still not fully "visible"
  
          // Optional: confirm success message
          cy.get('.message-success')
            .should('be.visible')
            .and('contain', 'has been added to your Wish List.');
        }
        
     
  
    viewWishlist() {
      cy.get('.block-wishlist > .block-content > .actions-toolbar > .primary > .action > span').click();
    };
  
    proceedToCheckout() {
      cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-actions > .actions-primary > .action > span').click();
      cy.get('#option-label-size-143-item-167').click();
      cy.get('#option-label-color-93-item-56').click();
      cy.get('#product-addtocart-button').last().click();    
      cy.get('.message-success > div').contains('Hoodie to your shopping cart')
      
    };
  
  
};

  
  export const wishlistPage = new WishlistPage();