describe("jvjyhello",()=>{
it("howareyou" ,()=>{
cy.visit("https://github.com/dashboard")
cy.get('[name="login"]').type("ok")
cy.get('[name="password"]').type("ok123")
cy.get('[name="commit"]').click()


})
})