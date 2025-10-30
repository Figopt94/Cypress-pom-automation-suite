class registerPage {
    // Helper methods for generating test data
    static generateRandomEmail() {
        const timestamp = Date.now()
        const random = Math.floor(Math.random() * 1000)
        return `test.${timestamp}.${random}@example.com`
    }

    static generateRandomUsername() {
        const adjectives = ['Happy', 'Lucky', 'Clever', 'Swift', 'Bright']
        const nouns = ['Cat', 'Dog', 'Fox', 'Bear', 'Wolf']
        const randomNumber = Math.floor(Math.random() * 1000)
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
        return `${randomAdjective}${randomNoun}${randomNumber}`
    }
    
    page = 'https://petstore.octoperf.com/';
    enterButton = '#Content a';
    signupButton = '#MenuContent a:nth-child(3)';
    registerNowButton = '#Catalog a';
    usernameField = '[name="username"]';
    newPasswordField = '#Catalog [name="password"]';
    repeatPasswordField = '#Catalog [name="repeatedPassword"]';
    firstNameField = '#Catalog [name="account.firstName"]';
    lastNameField = '#Catalog [name="account.lastName"]';
    emailField = '#Catalog [name="account.email"]';
    phoneField = '#Catalog [name="account.phone"]';
    address1Field = '#Catalog [name="account.address1"]';
    address2Field = '#Catalog [name="account.address2"]';
    cityField = '#Catalog [name="account.city"]';
    stateField = '#Catalog [name="account.state"]';
    zipField = '#Catalog [name="account.zip"]';
    countryField = '#Catalog [name="account.country"]';
    saveAccountButton = '#Catalog [name="newAccount"]';
    successUrl = 'https://petstore.octoperf.com/actions/Catalog.action';

    enterPage() {
        cy.visit(this.page);
    }

    clickEnterButton() {
        cy.get(this.enterButton).click();
    }

    clickSignupButton() {
        cy.get(this.signupButton).click();
    }

    clickRegisterNowButton() {
        cy.get(this.registerNowButton).click();
    } 

    typeUsername(username) {
        cy.get(this.usernameField).type(username);
    }

    typeNewPassword(newPassword) {
        cy.get(this.newPasswordField).type(newPassword);
    }

    typeRepeatPassword(repeatPassword) {
        cy.get(this.repeatPasswordField).type(repeatPassword);
    }

    typeFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName);
    }

    typeLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    typeEmail(email) {
        cy.get(this.emailField).type(email);
    }

    typePhone(phone) {
        cy.get(this.phoneField).type(phone);
    }

    typeAddress1(address1) {
        cy.get(this.address1Field).type(address1);
    }

    typeAddress2(address2) {
        cy.get(this.address2Field).type(address2);
    }

    typeCity(city) {
        cy.get(this.cityField).type(city);
    }

    typeState(state) {
        cy.get(this.stateField).type(state);
    }

    typeZip(zip) {
        cy.get(this.zipField).type(zip);
    }

    typeCountry(country) {
        cy.get(this.countryField).type(country);
    }

    clickSaveAccountButton() {
        cy.get(this.saveAccountButton).click();
    }

    verifySuccessfulRegistration() {
        cy.url().should('eq', this.successUrl);
    }

}
export default registerPage

// locators

// cy.visit('https://petstore.octoperf.com/')
// cy.get('#Content a').click();
// cy.get('#MenuContent a:nth-child(3)').click();
// cy.get('#Catalog a').click();
// cy.get('[name="username"]').click();
// cy.get('#Catalog [name="password"]').click();
// cy.get('#Catalog [name="repeatedPassword"]').click();
// cy.get('#Catalog [name="account.firstName"]').click();
// cy.get('#Catalog [name="account.lastName"]').click();
// cy.get('#Catalog [name="account.email"]').click();
// cy.get('#Catalog [name="account.phone"]').click();
// cy.get('#Catalog [name="account.address1"]').click();
// cy.get('#Catalog [name="account.address2"]').click();
// cy.get('#Catalog [name="account.city"]').click();
// cy.get('#Catalog [name="account.state"]').click();
// cy.get('#Catalog [name="account.zip"]').click();
// cy.get('#Catalog [name="account.country"]').click();
// cy.get('#Catalog [name="newAccount"]').click();