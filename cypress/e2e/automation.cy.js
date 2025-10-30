describe('template spec', () => {
  it('login valido', () => {
    // cy.visit('https://automationexercise.com/login');
    // cy.get('[data-qa="login-email"]').type('fr94@test.com');
    // cy.get('[data-qa="login-password"]').type('test123');
    // cy.get('[data-qa="login-button"]').click();
    cy.login('fr94@test.com', 'test123');
    // cy.wait(1000);
    cy.log('passou aqui');
    cy.get('#header b').should('have.text', 'Filipe Rodrigues');
  })
});

it('login invalido', function() {
  cy.login('fr94sd@test.com', 'teqwest123');
  cy.get('#form p').should('have.text', 'Your email or password is incorrect!');
});