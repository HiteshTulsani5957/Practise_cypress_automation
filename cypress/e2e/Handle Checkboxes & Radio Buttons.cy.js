describe("Cheaking Radio Buttons",()=>{
it(" Radio Buttons",()=>{
   cy.visit("https://testautomationpractice.blogspot.com/")

//    Cheaking Box
   cy.get(':nth-child(4) > [name="gender"]').check().should("be.checked")
   cy.get(':nth-child(3) > [name="gender"]').should("not.be.checked")

//    Visibility Test
   cy.get(':nth-child(4) > [name="gender"]').should("be.visible")
   cy.get(':nth-child(3) > [name="gender"]').should("be.visible")


   
})
})