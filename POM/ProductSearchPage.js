class ProductSearch {
    // Locators
    searchField = '#SearchContent [name="keyword"]'
    searchButton = '#SearchContent input[type="submit"]'
    bulldogProduct = '#Catalog table a'
    productName = '#Catalog table tbody tr td'
    productPrice = '#Catalog table tbody tr td:nth-child(2)'
    productDescription = '#Catalog p'
    noResultsMessage = '#Content'

    // Search actions
    enterSearchTerm(keyword) {
        cy.get(this.searchField).clear().type(keyword)
    }

    clickSearchButton() {
        cy.get(this.searchButton).click()
    }

    clickBulldogProduct() {
        cy.get(this.bulldogProduct).click()
    }

    // Click a product link by its visible name in results (e.g., "Bulldog")
    clickProductByName(name) {
        cy.get('#Catalog').contains('a', name).first().click()
    }

    // Complete search flow
    search(keyword) {
        this.enterSearchTerm(keyword)
        this.clickSearchButton()
    }

    // Search and select bulldog product
    searchAndSelectBulldog(keyword) {
        this.search(keyword)
        this.clickBulldogProduct()
    }

    // Navigate to the product page and validate details there
    validateProductDetailsOnProductPage(expectedName, expectedPrice, expectedDescription) {
        // Expect we're on /viewProduct page after clicking a product
        cy.url().should('include', 'viewProduct')
        
        // Name is shown as a heading within the Catalog area
        cy.get('#Catalog').within(() => {
            cy.get('h2').should('contain.text', expectedName)

            // Price is usually present in the item table rows
            if (expectedPrice) {
                cy.get('table').should('exist')
                cy.get('table td').should('contain.text', expectedPrice)
            }

            // Description often appears in the item description column (e.g., "Male Adult  Bulldog")
            if (expectedDescription) {
                cy.get('table td').should('contain.text', expectedDescription)
            }
        })
    }

    // Convenience: click product row that contains the name, then validate on the product page
    openProductAndValidate(expectedName, expectedPrice, expectedDescription) {
        // Find the table row that contains the expected name text and click its first link
        cy.get('#Catalog').contains('td', expectedName)
            .parents('tr')
            .find('a')
            .first()
            .click()

        this.validateProductDetailsOnProductPage(expectedName, expectedPrice, expectedDescription)
    }

    // Validation for no results
    validateNoResults() {
        // Wait for results to load
        cy.wait(1000)
        
        // Verify that there are no product links in the results
        cy.get('#Catalog table a')
            .should('not.exist')
        
        // Verify the catalog table shows empty state
        cy.get('#Catalog table')
            .should('exist')
            .and('not.contain.text', 'Bulldog')
            .and('not.contain.text', 'Fish')
    }
}

export default ProductSearch