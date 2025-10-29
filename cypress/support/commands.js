// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://automationexercise.com/')
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('registo', (nome, email, password, diaNasicemento, mesNascimento, anoNascimento, firstName, lastName, adress, country, state, city, zipcode, mobilePhone) => {
    cy.visit('https://automationexercise.com/')
    cy.get('#header a[href="/login"]').click();
    cy.wait(2000);
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#form h2:nth-child(1) b').should('have.text', 'Enter Account Information');
    cy.get('#id_gender1').check();
    cy.get('[data-qa="name"]').should('have.value', nome);
    cy.get('[data-qa="email"]').should('have.value', email);
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select(diaNasicemento);
    cy.get('[data-qa="months"]').select(mesNascimento);
    cy.get('[data-qa="years"]').select(anoNascimento);
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="address"]').type(adress);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobilePhone);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"] b').should('have.text', 'Account Created!');
});

Cypress.Commands.add('abrirPetStore', () => {
    cy.visit('https://petstore.octoperf.com/')
    cy.get('#Content a').click();
});

Cypress.Commands.add('registoPetStore', (username, password, password2, firstname, lastname, adress, city, state, zip, country, phone = null) => {
    cy.get('#MenuContent a:nth-child(3)').click();
    cy.get('#Catalog a').click();
    cy.get('[name="username"]').type(username);
    cy.get('#Catalog [name="password"]').type(password);
    cy.get('#Catalog [name="repeatedPassword"]').type(password2);
    cy.get('#Catalog [name="account.firstName"]').type(firstname);
    cy.get('#Catalog [name="account.lastName"]').type(lastname);
    cy.get('#Catalog [name="account.email"]').type(username + '@gmail.com');
    cy.get('#Catalog [name="account.phone"]').type(phone);
    cy.get('#Catalog [name="account.address1"]').type(adress);
    cy.get('#Catalog [name="account.city"]').type(city);
    cy.get('#Catalog [name="account.state"]').type(state);
    cy.get('#Catalog [name="account.zip"]').type(zip);
    cy.get('#Catalog [name="account.country"]').type(country);
    cy.get('#Catalog [name="newAccount"]').click();
    cy.get('#CTA').should('be.visible');
});

Cypress.Commands.add('loginPetStore', (username, password) => {
    cy.get('#MenuContent a:nth-child(3)').click();
    cy.get('[name="username"]').type(username);
    cy.get('#Catalog [name="password"]').clear();
    cy.get('#Catalog [name="password"]').type(password);
    cy.get('#Catalog [type="submit"]').click();
});

Cypress.Commands.add('buscarProduto', (Produto) => {
    cy.get('#SearchContent [name="keyword"]').type(Produto);
    cy.get('#SearchContent [name="searchProducts"]').click();
});

Cypress.Commands.add('removerProduto', () => {
    cy.get('#Cart a[href="/actions/Cart.action?removeItemFromCart=&workingItemId=EST-6"]').click();
    cy.get('#Cart td[colspan="8"] b').should('have.text', 'Your cart is empty.');
});

Cypress.Commands.add('checkout', (card,expiryDate,City,State,Zip,Country,) => {
    cy.get('#Catalog [name="order.creditCard"]').type(card);
    cy.get('#Catalog [name="order.expiryDate"]').clear();
    cy.get('#Catalog [name="order.expiryDate"]').type(expiryDate);
    cy.get('#Catalog [name="order.billCity"]').type(City);
    cy.get('#Catalog [name="order.billState"]').type(State);
    cy.get('#Catalog [name="order.billZip"]').type(Zip);
    cy.get('#Catalog [name="order.billCountry"]').clear();
    cy.get('#Catalog [name="order.billCountry"]').type(Country);
}); 

