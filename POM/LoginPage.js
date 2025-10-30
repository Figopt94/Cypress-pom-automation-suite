class LoginPage {

    page = 'https://petstore.octoperf.com/';
    enterButton = '#Content a';
    loginLink = '#MenuContent a[href*="signonForm"]';  // Updated to more specific login link selector
    userField = '[name="username"]'
    passwordField = '#Catalog [name="password"]'
    loginButton = '#Catalog input[type="submit"]'  // Updated to match actual login button

    enterPage() {
        cy.visit(this.page);
    }

    clickEnterButton() {
        cy.get(this.enterButton).click();
    }

    clickLoginLink() {
        cy.get(this.loginLink).click();
    }
    
    typeUsername(username) {
        cy.get(this.userField).clear().type(username);
    }

    typePassword(password) {
        cy.get(this.passwordField).clear().type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    // Helper method for complete login flow
    login(username, password) {
        this.enterPage();
        this.clickEnterButton();
        this.clickLoginLink();
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }
}

export default LoginPage


// locators
    // cy.get('#MenuContent a:nth-child(3)').click();
    // cy.get('[name="username"]').type(username);
    // cy.get('#Catalog [name="password"]').clear();
    // cy.get('#Catalog [name="password"]').type(password);
    // cy.get('#Catalog [type="submit"]').click();