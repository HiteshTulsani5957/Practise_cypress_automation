// /// <reference types="Cypress" />
// describe("Handle dropdown",()=>{
//     it("Dropdown with select",()=>{
//     cy.visit("https://practice.expandtesting.com/dropdown")
//     cy.get('[name="country"]').select("Germany").should("have.value","Germany")

// })


//   it("Auto suggest Dropdown",()=>{
//   cy.visit("https://www.wikipedia.org/")
//     cy.get("#searchInput").type("Delhi")
//     cy.get(".suggestions-dropdown").contains("Delhi University").click()

// })

//   it("Dynamic Dropdown",()=>{
//   cy.visit("https://www.google.com/")
//     cy.get("#APjFqb").type("cypress automation")//this is search box element
// cy.wait(3000)
//     cy.get(".wM6W7d>span").each(($el,index,$list)=>{//this is made of seaching element inspect with class & >span
// if($el.text()=='cypress automation testing')
// {
//   cy.wrap($el).click()
// }
  
// })
// cy.get("#APjFqb").should('have.value','cypress automation testing')
// })
// })