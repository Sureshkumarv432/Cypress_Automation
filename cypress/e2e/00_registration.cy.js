import { loginPage } from '../pages/loginpage';

describe('Registration Flow', () => {
  it('should register and log in successfully', function () {
    cy.fixture('userData').then((user) => {
      loginPage.register(user.firstName, user.lastName, user.password);
    });
  });
});