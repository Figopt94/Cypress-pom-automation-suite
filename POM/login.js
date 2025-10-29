class Login {
    // campos email, password, clicar login e verificar sobrenome do utilizador

    campoEmail = '[data-qa="login-email"]'
    campoPassword = '[data-qa="login-password"]'
    butaoLogin = '[data-qa="login-button"]'
    campoNomeESobrenome = '#header b'
    mensagemErro = '#form p'

    preencherEmail(email) {
        cy.get(this.campoEmail).type(email);
    }

    preencherPassword(password) {
        cy.get(this.campoPassword).type(password);
    }

    clicarBotaoLogin() {
        cy.get(this.butaoLogin).click();
    }

    verificarNomeESobrenome(nomeESobrenome) {
        cy.get(this.campoNomeESobrenome).should('have.text', nomeESobrenome);
    }

    verificarMensagemErro(mensagem) {
        cy.get(this.mensagemErro).should('have.text', mensagem);
    }
}

export default Login;