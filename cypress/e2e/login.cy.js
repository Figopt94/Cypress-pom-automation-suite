import Login from "../../POM/login";   

describe('Login tests', () => {
    const login = new Login();

    it('Valid login', () => {
        cy.visit('https://automationexercise.com/login');
        login.fillEmail('fr94@test.com');
        login.fillPassword('test123');
        login.clickLoginButton();
        login.verifyUserName('Filipe Rodrigues');
    })

    it('Invalid login', () => {
        cy.visit('https://automationexercise.com/login');
        login.fillEmail('fr94@test.com');
        login.fillPassword('test1232');
        login.clickLoginButton();
        login.verifyErrorMessage('Your email or password is incorrect!');
    })
});