# Cypress POM Automation Suite

[![Cypress Tests](https://github.com/Figopt94/Cypress-pom-automation-suite/actions/workflows/cypress.yml/badge.svg)](https://github.com/Figopt94/Cypress-pom-automation-suite/actions/workflows/cypress.yml)

A comprehensive Cypress test automation project using the **Page Object Model (POM)** pattern for web application testing. Features automated tests for login functionality, user registration, and complete e-commerce workflows using the JPetStore demo application.

## 🏗️ Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── automation.cy.js    # Automation Exercise login tests
│   │   ├── login.cy.js         # POM-based login tests
│   │   ├── petstore.cy.js      # Complete PetStore e-commerce suite
│   │   └── register.cy.js      # User registration tests
│   ├── fixtures/
│   │   └── example.json        # Test data fixtures
│   └── support/
│       ├── commands.js         # Custom Cypress commands
│       └── e2e.js             # Global configuration and setup
├── POM/                        # Page Object Model classes
│   ├── CartPage.js            # Shopping cart functionality
│   ├── CheckoutPage.js        # Checkout process
│   ├── ErrorMessages.js       # Error handling utilities
│   ├── Homepage.js            # Homepage navigation
│   ├── LoginPage.js           # Login functionality with validation
│   ├── ProductDetailPage.js   # Product details validation
│   ├── ProductSearchPage.js   # Product search and validation
│   └── RegisterPage.js        # User registration with random data generation
├── .github/workflows/
│   └── cypress.yml            # GitHub Actions CI/CD pipeline
├── cypress.config.js          # Cypress configuration
├── package.json              # Dependencies and scripts
└── .gitignore                # Git ignore patterns
```

## 🧪 Test Coverage

### Test Suites:
- **Automation Exercise Tests** (`automation.cy.js`): 2 tests
  - Valid login scenarios
  - Invalid login error handling
  
- **POM Login Tests** (`login.cy.js`): 2 tests  
  - POM-based login validation
  - Error message verification
  
- **PetStore E-commerce Suite** (`petstore.cy.js`): 8 tests
  - ✅ User registration (valid/invalid scenarios)
  - ✅ Login functionality (valid/invalid credentials) 
  - ✅ Product search and navigation
  - ✅ Product details validation on dedicated pages
  - ✅ Search result validation
  - ✅ Error handling for invalid searches
  
- **Registration Tests** (`register.cy.js`): 1 test
  - User registration workflows

### 🎯 **Total: 13 automated test cases**
- ✅ All tests passing with robust POM implementation
- 🧪 Average execution time: ~30 seconds
- 🔄 Random data generation for reliable test runs

## 🚀 Key Features

### Page Object Model Implementation
- **Modular design**: Separate POM classes for each page/component
- **Random data generation**: Built-in utilities for unique usernames and emails
- **Robust selectors**: Reliable element identification strategies
- **Validation methods**: Comprehensive assertion helpers
- **Navigation helpers**: Streamlined page-to-page workflows

### Test Data Management
- Dynamic username generation: `RegisterPage.generateRandomUsername()`
- Random email creation: `RegisterPage.generateRandomEmail()`
- Parameterized test scenarios for reusability

## 📋 Prerequisites

- Node.js 18+ 
- Cypress 15.5.0+

## 🔧 Installation

```bash
npm install
```

## 🏃 Running Tests

### Run all tests in headless mode:
```bash
npm test
# or
npx cypress run
```

### Run specific test suites:
```bash
# Run only PetStore tests
npx cypress run --spec "cypress/e2e/petstore.cy.js"

# Run with specific browser
npx cypress run --browser chrome
```

### Run tests in headed mode:
```bash
npm run test:headed
```

### Open Cypress Test Runner:
```bash
npx cypress open
```

## 🎯 Test Applications

- **Automation Exercise**: https://automationexercise.com/
- **JPetStore Demo**: https://petstore.octoperf.com/

## 🔄 CI/CD Pipeline

Automated testing with GitHub Actions includes:

- ✅ **Automated testing** on every push/PR to main branch
- ✅ **Node.js 22 LTS** environment
- ✅ **Chrome browser** testing in headless mode  
- ✅ **Artifact collection** for failed test screenshots and videos
- ✅ **Test summary reports** with detailed results
- ✅ **Manual trigger** capability via workflow_dispatch

## 📈 Usage Examples

### POM-based Test Structure:
```javascript
import LoginPage from "../../POM/LoginPage"
import ProductSearch from "../../POM/ProductSearchPage.js"

describe('PetStore Tests', () => {
  it('Search and validate product details', () => {
    const loginPage = new LoginPage()
    const productSearchPage = new ProductSearch()
    
    loginPage.login('username', 'password')
    productSearchPage.search('bulldog')
    productSearchPage.openProductAndValidate('Bulldog', '$18.50', 'Male Adult')
  })
})
```

### Random Data Generation:
```javascript
const username = RegisterPage.generateRandomUsername()  // User_1234
const email = RegisterPage.generateRandomEmail()        // user1234@test.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Built with 💛 using Cypress and the Page Object Model pattern**