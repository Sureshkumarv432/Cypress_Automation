import { loginPage } from '../pages/loginpage';
import { searchPage } from '../pages/searchpage';

describe('Search Functionality', () => {


  before(() => {
    cy.fixture('userData').then((user) => {
      loginPage.login(user.email, user.password);
    });
  });

  it('should return relevant products for a search query', () => {

    searchPage.searchForProduct('Circe Hooded Ice Fleece');
    searchPage.verifySearchResults('Circe Hooded Ice Fleece');
  });
})
