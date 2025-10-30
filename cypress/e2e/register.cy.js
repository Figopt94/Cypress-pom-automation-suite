describe('Registration tests', () => {
  it('valid user registration', () => {
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="signup-name"]').click();
    cy.get('[data-qa="signup-name"]').type('Figo');
    
    // Generate a random email
    const randomEmail = 'figo' + Math.floor(Math.random() * 10000) + '@mailinator.com';
    cy.get('[data-qa="signup-email"]').type(randomEmail);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('Pass123');
    cy.get('[data-qa="days"]').select('11');
    cy.get('[data-qa="months"]').select('8');
    cy.get('[data-qa="years"]').select('1997');
    cy.get('[data-qa="first_name"]').type('Filipe');
    cy.get('[data-qa="last_name"]').type('Rodrigues');
    cy.get('[data-qa="address"]').type('Rua da Companhia 12');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Porto');
    cy.get('[data-qa="city"]').type('Porto');
    cy.get('[data-qa="zipcode"]').type('4100-000');
    cy.get('[data-qa="mobile_number"]').click();
    cy.get('[data-qa="mobile_number"]').type('919996690');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"] b').should('have.text', 'Account Created!');
  })
})