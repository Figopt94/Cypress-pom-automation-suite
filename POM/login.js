class Login {
    // Email field, password field, login button click and verify user name

    emailField = '[data-qa="login-email"]'
    passwordField = '[data-qa="login-password"]'
    loginButton = '[data-qa="login-button"]'
    userNameField = '#header b'
    errorMessage = '#form p'

    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    verifyUserName(userName) {
        cy.get(this.userNameField).should('have.text', userName);
    }

    verifyErrorMessage(message) {
        cy.get(this.errorMessage).should('have.text', message);
    }
}

export default Login;