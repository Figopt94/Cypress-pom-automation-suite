import RegisterPage from "../../POM/RegisterPage"
import LoginPage from "../../POM/LoginPage"
import ProductSearch from "../../POM/ProductSearchPage.js"

describe('Petstore', () => {
  // create a page-object instance and use it
  const registerPage = new RegisterPage()
  // fill the form with random username
  const username = RegisterPage.generateRandomUsername()

  it('Valid registration', () => {
    // navigate to the registration form using the POM helpers
    registerPage.enterPage()
    registerPage.clickEnterButton()
    registerPage.clickSignupButton()
    registerPage.clickRegisterNowButton()
    registerPage.typeUsername(username)
    registerPage.typeNewPassword('Test@1234')
    registerPage.typeRepeatPassword('Test@1234')
    registerPage.typeFirstName('Test')
    registerPage.typeLastName('User')
    registerPage.typeEmail(RegisterPage.generateRandomEmail())
    registerPage.typePhone('1234567890')
    registerPage.typeAddress1('123 Test St')
    registerPage.typeAddress2('Apt 4')
    registerPage.typeCity('Testville')
    registerPage.typeState('Testonia')
    registerPage.typeZip('12345')
    registerPage.typeCountry('Testland')
    registerPage.clickSaveAccountButton()
    registerPage.verifySuccessfulRegistration()
  })

  it('Invalid registration', () => {
    registerPage.enterPage()
    registerPage.clickEnterButton()
    registerPage.clickSignupButton()
    registerPage.clickRegisterNowButton()
    registerPage.typeUsername(' ')
    registerPage.typeNewPassword('Test@1234')
    registerPage.typeRepeatPassword('Testasdwqwd')
    registerPage.typeFirstName('Test')
    registerPage.typeLastName('User')
    registerPage.typeEmail('invalid-email')
    registerPage.typePhone('1234567890')
    registerPage.typeAddress1('123 Test St')
    registerPage.typeAddress2('Apt 4')
    registerPage.typeCity('Testville')
    registerPage.typeState('Testonia')
    registerPage.typeZip('12345')
    registerPage.typeCountry('Testland')
    registerPage.clickSaveAccountButton()
    // For invalid registration, we expect to stay on the same page
    cy.url().should('not.eq', registerPage.successUrl)
  })

  it('Valid Login', () => {
    const loginPage = new LoginPage()
    // Using the helper method for complete login flow
    loginPage.login('Figopt94', 'Teste123')
    // Verify successful login by checking the URL
    cy.url().should('include', '/actions/Catalog.action')
  })

  it('Invalid Login', () => {
    const loginPage = new LoginPage()
    loginPage.login('invalidUser', 'Test123')
    // Verify unsuccessful login by checking for error message
    cy.get('#Content').should('contain', 'Invalid username or password')
    cy.url().should('include', '/actions/Account.action')
  })

  it('Invalid Login 2', () => {
    const loginPage = new LoginPage()
    loginPage.login('Figopt94', 'invalidPass')
    // Verify unsuccessful login by checking for error message
    cy.get('#Content').should('contain', 'Invalid username or password')
    cy.url().should('include', '/actions/Account.action')
  })

  it('Valid search after login - validate product details', () => {
    const loginPage = new LoginPage()
    const productSearchPage = new ProductSearch()
    // Using the helper method for complete login flow
    loginPage.login('Figopt94', 'Teste123')
    // Verify successful login by checking the URL
    cy.url().should('include', '/actions/Catalog.action')
    // Now perform a product search
    productSearchPage.search('bulldog')
    // Open the product page and validate expected details there
    productSearchPage.openProductAndValidate(
      'Bulldog',
      '$18.50',
      'Male Adult'
    )
  })

  it('Invalid search after login - validate no results', () => {
    const loginPage = new LoginPage()
    const productSearchPage = new ProductSearch()
    // Using the helper method for complete login flow
    loginPage.login('Figopt94', 'Teste123')
    // Verify successful login by checking the URL
    cy.url().should('include', '/actions/Catalog.action')
    // Now perform an invalid product search
    productSearchPage.search('xyz123')
    // Validate no results message
    productSearchPage.validateNoResults()
  })

  it('Invalid search without login - validate no results', () => {
    const loginPage = new LoginPage()
    const productSearchPage = new ProductSearch()
    loginPage.login('Figopt94', 'Teste123')
    productSearchPage.search('bulldog')
  })

})