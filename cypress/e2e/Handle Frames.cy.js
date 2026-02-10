import 'cypress-iframe'
describe("handling frames",()=>{
it.skip("approach1",()=>{
cy.visit("https://the-internet.herokuapp.com/iframe");

 let ab=cy.get('#mce_0_ifr')
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap)

iframe.clear().type("welcome {ctrl+a}");
cy.get('[aria-label="Bold"]').click();
})


it.skip("approach2 using custom command",()=>{
cy.visit("https://the-internet.herokuapp.com/iframe");

cy.getIframe('#mce_0_ifr').clear().type("welcome {ctrl+a}");
cy.get('[aria-label="Bold"]').click();
})


it.only("approach2 using cypress-iframe by plugins",()=>{
cy.visit("https://the-internet.herokuapp.com/iframe");
cy.frameLoaded('#mce_0_ifr')
cy.getiframe('#mce_0_ifr').clear().type("welcome {ctrl+a}");
cy.get('[aria-label="Bold"]').click();
})

})