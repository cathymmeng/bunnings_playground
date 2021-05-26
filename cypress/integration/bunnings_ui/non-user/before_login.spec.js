describe('Bunnings - Search function exploration', () => {

    it('Perform Homepage loading', () => {
        cy.visit('https://www.bunnings.com.au/')
    })

    it('Some basic Homepage elements check', () => {
        cy.get('#navContainer')
            .contains('Products')
            // .find('div')
            // .should('have.class', 'topLeftIconContainer')
            // .and('have.class','hamburgerIcon')
    })

    it('Top bar Search element is hidden', () => {
        cy.get('#header-search')
            .find('input')
            .click({ force: true })
            cy.get('[type="search"]:first')
            .find('#flyout').should('not.exist')
    })

    it('Guest user searches "Hello Bunnings!"', () => {
        cy.get('[class^=PopularRecentSuggestionsstyle__]').find('div > p')
        cy.get('[class^=HeaderTopstyle__SearchIconContainer-] > .Icon__SVG-akqoq7-0').click({position: 'topLeft'})
        cy.get('#custom-css-outlined-input').type('Hello Bunnings!')
    })

    //TODO: code below are for experimenting Cypress

        // cy.get('#header-search input')
        //     .type('Hello, World')
        //     .find('[title="header-search"]').type('Hello, World')

        // cy.get('[class^=GlobalSearchFlyoutstyle_]:first').should('be.visible')
        //     .should('have.attr', 'aria-invalid', 'autocomplete','id','name')
        
        // cy.get('input [type=search]:first').click({ force: true })
        // cy.get('[name=q]').type('cathynandroid@gmail.com{enter}')
        // cy.get('.error-message'
        //     .should('contain','password can\'t be blank'))

        // explicit wait example
            // cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            //     expect($x).to.have.class('ls-nav-active');
            // })

})