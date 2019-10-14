context('Navigation to Amazon website-Test Suite', () => {
    it('Login scenario', () => {
        cy.visit("http://www.skillswap.pro/")
        cy.contains('Sign In').click()
        cy.get('.field:nth-child(2) > input').type('prabhavathi6@gmail.com')
        cy.get('.field:nth-child(3) > input').type('prabha@ic')
        cy.get('.fluid').click()
        cy.screenshot()
        cy.title().should('include','Home')
        
})
}) 
    