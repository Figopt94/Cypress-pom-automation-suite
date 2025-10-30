describe('Automation Exercise Tests', () => {
  it('valid login', () => {
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type('fr94@test.com');
    cy.get('[data-qa="login-password"]').type('test123');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header b').should('have.text', 'Filipe Rodrigues');
  })

  it('invalid login', () => {
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type('fr94sd@test.com');
    cy.get('[data-qa="login-password"]').type('teqwest123');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#form p').should('have.text', 'Your email or password is incorrect!');
  })
})