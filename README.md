# Cypress Test Automation Project

This project contains automated tests using Cypress for web application testing. It includes test scenarios for login functionality, user registration, and e-commerce testing with PetStore.

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── automation.cy.js    # Login automation tests
│   │   ├── login.cy.js         # Login tests using POM
│   │   ├── petstore.cy.js      # PetStore e-commerce tests
│   │   └── register.cy.js      # User registration tests
│   ├── fixtures/
│   │   └── example.json        # Test data fixtures
│   └── support/
│       ├── commands.js         # Custom Cypress commands
│       └── e2e.js             # Support file for e2e tests
├── POM/
│   └── login.js               # Page Object Model for login
├── cypress.config.js          # Cypress configuration
└── package.json              # Project dependencies
```

## Test Coverage

### Test Suites:
- **Login Tests**: Valid and invalid login scenarios for automationexercise.com
- **Registration Tests**: User registration functionality
- **PetStore Tests**: Comprehensive e-commerce testing including:
  - User registration and login
  - Product search and selection
  - Shopping cart management
  - Checkout process
  - Error handling scenarios

### Total Tests: 21
- ✅ All tests passing
- 🧪 Test execution time: ~1 minute

## Prerequisites

- Node.js installed
- Cypress 15.5.0

## Installation

```bash
npm install
```

## Running Tests

### Run all tests in headless mode:
```bash
npx cypress run
```

### Open Cypress Test Runner:
```bash
npx cypress open
```

## Custom Commands

The project includes several custom Cypress commands defined in `cypress/support/commands.js`:

- `cy.login(email, password)` - Login functionality
- `cy.registo(...)` - User registration
- `cy.abrirPetStore()` - Open PetStore application
- `cy.registoPetStore(...)` - PetStore user registration
- `cy.loginPetStore(username, password)` - PetStore login
- `cy.buscarProduto(produto)` - Search for products
- `cy.removerProduto()` - Remove product from cart
- `cy.checkout(...)` - Checkout process

## Page Object Model

The project uses Page Object Model (POM) pattern for the login functionality, located in `POM/login.js`.

## Test Sites

- **Automation Exercise**: https://automationexercise.com/
- **PetStore**: https://petstore.octoperf.com/

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request