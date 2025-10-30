import Login from "../../POM/login";   

describe('Login tests', () => {
    const login = new Login();

    it('Valid login', () => {
        cy.visit('https://automationexercise.com/login');
        login.preencherEmail('fr94@test.com');
        login.preencherPassword('test123');
        login.clicarBotaoLogin();
        login.verificarNomeESobrenome('Filipe Rodrigues');
    })

    it('Invalid login', () => {
        cy.visit('https://automationexercise.com/login');
        login.preencherEmail('fr94@test.com');
        login.preencherPassword('test1232');
        login.clicarBotaoLogin();
        login.verificarMensagemErro('Your email or password is incorrect!');
    })
});