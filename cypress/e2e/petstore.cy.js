it('registo', function() {
  cy.visit('https://automationexercise.com/')
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.registo(randomName,randomName+"@gmail.com",randomName,"22","2","2004","teste","teste","Coimbra","United States","Coimbra 23","Coimbra","3330","961111111")
  cy.get('[data-qa="account-created"] b').should('have.text', 'Account Created!');
});

it('PetStore_1', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.registoPetStore(randomName,randomName,randomName,"Teste","Teste","Teste","Adress_Teste","City_Teste","state_Teste","3333","country_Teste","961111111");
});

it('PetStore_2', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.registoPetStore(randomName,randomName,"Test","Teste","Teste","Teste","Adress_Teste","City_Teste","state_Teste","3333","country_Teste","961111111");
});

it('PetStore_3', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.get('#WelcomeContent').should('be.visible');
  cy.get('#MenuContent a[href="/actions/Account.action?signoff="]').should('be.visible');
  cy.url().should("eq", 'https://petstore.octoperf.com/actions/Catalog.action');
});

it('PetStore_4', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User","User_7154");
  cy.get('[class="messages"]').should('contain',"Invalid username or password.  Signon failed.")
});


it('PetStore_5', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User");
  cy.get('[class="messages"]').should('contain',"Invalid username or password.  Signon failed.")
});

it('PetStore_6', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog font').click();
  cy.get('#Catalog tr:nth-child(2) td:nth-child(2)').should('have.text', 'K9-BD-01');
  cy.get('#Catalog tr:nth-child(2) td:nth-child(3)').should('have.text', 'Male Adult  \n\t\t\t  Bulldog');
  cy.get('#Catalog tr:nth-child(2) td:nth-child(4)').should('have.text', '$18.50');
  cy.get('#Catalog tr:nth-child(3) td:nth-child(2)').should('have.text', 'K9-BD-01');
  cy.get('#Catalog tr:nth-child(3) td:nth-child(3)').should('have.text', 'Female Puppy  \n\t\t\t  Bulldog');
  cy.get('#Catalog tr:nth-child(3) td:nth-child(4)').should('have.text', '$18.50');
});

it('PetStore_7', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("asdhfaJKshdjkaskdjba");
  cy.get('#Catalog td').should('be.visible');
});

it('PetStore_8', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart td:nth-child(3)').should('have.text', 'Male Adult \n\t\t\t\t \n\t\t\t\t Bulldog');
});

it('PetStore_9', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.removerProduto();
});

it('PetStore_10', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart a[href="/actions/Order.action?newOrderForm="]').click()
  cy.wait(2000);
  cy.checkout("344408839280663","12/29","Coimbra","Coimbra","3330","Portugal");
  cy.get('#Catalog [name="order.creditCard"]').type('344408839280663');
  cy.get('#Catalog [name="order.expiryDate"]').clear();
  cy.get('#Catalog [name="order.expiryDate"]').type('12/29');
  cy.get('#Catalog [name="order.billCity"]').type('Coimbra');
  cy.get('#Catalog [name="order.billState"]').type('Coimbra');
  cy.get('#Catalog [name="order.billZip"]').type('3330');
  cy.get('#Catalog [name="order.billCountry"]').type('Portugal');
  cy.get('#Catalog tr:nth-child(13)').click();
  cy.get('#Catalog [name="order.billCountry"]').clear();
  cy.get('#Catalog [name="order.billCountry"]').type('Portugal');
  cy.get('#Catalog tr:nth-child(4)').click();
  cy.get('#CTA').click();
  cy.get('#Catalog [name="newOrder"]').click();
  cy.get('#Catalog a.Button').click();
  cy.get('#Content li').should('have.text', 'Thank you, your order has been submitted.');
});


it('PetStore_11', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart a[href="/actions/Order.action?newOrderForm="]').click()
  cy.wait(2000);
  cy.checkout("A","12/29","Coimbra","Coimbra","3330","Portugal");
  cy.get('#Catalog [name="order.creditCard"]').clear();
  cy.get('#Catalog [name="newOrder"]').click();
  cy.get('#Catalog a.Button').click();
  cy.get('h1').should('have.text', 'HTTP Status 500 – Internal Server Error');
});

it('PetStore_12', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.get('#QuickLinks a:nth-child(3) img').click();
  cy.get('#Catalog a[href="/actions/Catalog.action?viewProduct=&productId=K9-BD-01"]').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart a[href="/actions/Order.action?newOrderForm="]').click();
  cy.get('#Content li').should('have.text', 'You must sign on before attempting to check out.  Please sign on and try checking out again.');
});

it('PetStore_13', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart td[colspan="7"]').should('have.text', 'Sub Total: $18.50 ');
  cy.get('#Cart [name="EST-6"]').click();
  cy.get('#Cart [name="EST-6"]').clear();
  cy.get('#Cart [name="EST-6"]').type('2');
  cy.get('#Catalog').click();
  cy.get('#Cart [name="updateCartQuantities"]').click();
  cy.get('#Cart td[colspan="7"]').should('have.text', 'Sub Total: $37.00 ');
});

it('PetStore_14', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.loginPetStore("User_7154","User_7154");
  cy.buscarProduto("Bulldog");
  cy.get('#Catalog td:nth-child(1) a').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart td[colspan="7"]').should('have.text', 'Sub Total: $18.50 ');
  cy.get('#Cart [name="EST-6"]').click();
  cy.get('#Cart [name="EST-6"]').clear();
  cy.get('#Cart [name="EST-6"]').type('2');
  cy.get('#Catalog').click();
  cy.get('#Cart [name="updateCartQuantities"]').click();
  cy.get('#Cart td[colspan="7"]').should('have.text', 'Sub Total: $37.00 ');
  cy.get('#QuickLinks a[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] img').click();
  cy.get('#MenuContent [name="img_cart"]').click();
  cy.get('#Cart td[colspan="7"]').should('have.text', 'Sub Total: $37.00 ');
});

it('PetStore_15', function() {
  const randomName = 'User_' + Math.floor(Math.random() * 10000);
  cy.abrirPetStore();
  cy.get('#MenuContent a:nth-child(3)').click();
  cy.get('#Catalog p:nth-child(2)').click();
  cy.get('#Catalog [name="password"]').clear();
  cy.get('#Catalog p:nth-child(2)').click();
  cy.get('#Catalog [name="signon"]').click();
  cy.get('#Catalog p:nth-child(1)').should('have.text', 'Please enter your username and password.');
  cy.get('#Catalog a').click();
  cy.get('#Catalog [name="newAccount"]').click();
  cy.get('#Catalog [name="newAccount"]').click();
  cy.get('[name="username"]').type('ea');
  cy.get('#Catalog [name="newAccount"]').click();
  cy.get('#LogoContent img').click();
  cy.get('#QuickLinks a[href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] img').click();
  cy.get('#Catalog a[href="/actions/Catalog.action?viewProduct=&productId=K9-BD-01"]').click();
  cy.get('#Catalog a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-6"]').click();
  cy.get('#Cart a[href="/actions/Order.action?newOrderForm="]').click();
});