import { loginPage } from '../pages/loginpage';

describe('Login Setup', () => {
    it('Logs in and saves session', () => {
        cy.fixture('userData').then((user) => {
            loginPage.login(user.email, user.password);
        });
    });
});