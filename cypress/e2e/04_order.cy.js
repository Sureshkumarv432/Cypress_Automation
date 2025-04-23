import { productPage } from '../pages/productpage';
import { loginPage } from '../pages/loginpage';

describe('Place Order', () => {
  before(() => {
        cy.fixture('userData').then((user) => {
          loginPage.login(user.email, user.password);
        });
      });
  it('should place an order with multiple products', () => {
    
   
    productPage.goToCart();
    productPage.placeOrder();
   
    // Add assertions for checkout process
  });
});