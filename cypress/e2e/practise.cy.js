describe('test', ()=> {
  it('Correct' , ()=>{
    cy.visit("https://www.orangehrm.com/")
    cy.title().should('eq','orangeHRM')

  })
})
describe('test', ()=> {
  it('Incorrect' , ()=>{
    cy.visit("https://www.orangehrm.com/")
    cy.title().should('eq','orangehrm123')

  })
})