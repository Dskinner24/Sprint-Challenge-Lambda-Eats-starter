describe('testing the form input', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3005/pizza')
    })
    it('test name input', function(){
        cy.get('[data-cy=name').type('Testing Name Out')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox1').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox2').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox3').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox4').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox5').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox6').check().should('be.checked')
    })
    it('tests checkbox input', function(){
        cy.get('[data-cy=checkbox7').check().should('be.checked')
    })
    it('tests form submit', function(){
        cy.get('[data-cy=submit]').submit()
    })
})