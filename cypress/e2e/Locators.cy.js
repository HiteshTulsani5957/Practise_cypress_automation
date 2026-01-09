describe("CSS Locators" , ()=>{
it("Locators",()=>{

cy.visit("https://automationexercise.com/products")
cy.get("#search_product").type("t-shirts")
cy.get("#submit_search").click()
cy.get(".title.text-center").contains("Searched Products")










  
})










})