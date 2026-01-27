describe("alert",()=>{
// it("Js alert",()=>{
// cy.visit("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")
// cy.get('#alertexamples').click()
// cy.on("window:alert",(t)=>{
//     expect(t).to.contain("I am an alert box!")
// })
// })
// it("js confirm by ok ",()=>{
//  cy.visit("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")   
// cy.get('#confirmexample').click()
// cy.on("window:confirm",(a)=>{
//     expect(a).to.contain("I am a confirm alert")
// })
// })
// it("js confirm by cancel",()=>{
//  cy.visit("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")   
// cy.get('#confirmexample').click()
// cy.on("window:confirm",(a)=>{
//     expect(a).to.contain("I am a confirm alert")
// })
//  cy.on("window:confirm",()=>false)
//  cy.get('#confirmreturn').should("have.text","false")
// })

//  it("js prompt",()=>{
// cy.visit("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")
// cy.window().then((a)=>{
//     cy.stub(a,'prompt').returns("lol")
// })
// cy.get('#promptexample').click()
// cy.get('#promptreturn').should("have.text","lol")
// })
 it("Authenticated alert",()=>{
cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
cy.get("div[class='example'] p").should("have.contains","Congratulations! You must have the proper credentials.")



})
})