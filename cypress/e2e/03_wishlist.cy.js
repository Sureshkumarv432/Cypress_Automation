import { wishlistPage } from '../pages/wishlistpage';
import { loginPage } from '../pages/loginpage';

describe('Wishlist Checkout', () => {

   before(() => {
      cy.fixture('userData').then((user) => {
        loginPage.login(user.email, user.password);
      });
    });

  it('should add products to wishlist and checkout', () => {
    wishlistPage.addToWishlist();
    wishlistPage.viewWishlist();
    wishlistPage.proceedToCheckout();
    
  });
});