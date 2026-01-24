describe('Assertion',()=>{
 it('InplicitAssertion',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// cy.url().should('include','orangehrmlive.com')
// cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// cy.url().should('contains','orangehrm')


// cy.url().should('include','orangehrmlive.com')
// .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// .should('contains','orangehrm')


// cy.url().should('include','orangehrmlive.com')
// .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// .and('contains','orangehrm')


// cy.title().should('include','Orange')
// .and('eq','OrangeHRM')
// .and('contains','HRM')

// cy.get('.orangehrm-login-branding > img').should('be.visible')
// .and('exist')


// cy.get('[name="username"]').type('Admin')
// cy.get('[name="username"]').should('have.value','Admin')




//  })
//  it("ExplicitAssertions",()=>{
//     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     cy.get('[name="username"]').type('Admin')
//     cy.get('[name="password"]').type('admin123')
//     cy.get('.oxd-button').click()

//     let expName="manda user"
//     // EXPLICIT ASSERTIONS
//     cy.get('.oxd-userdropdown-name').then((x)=>{
// let actname=x.text()
// //BDD assertion using expect
// expect(actname).to.equal(expName)
// expect(actname).to.not.equal(expName)
// //TDD assertion using ASSERT
// assert.equal(actname,expName)
// assert.not.equal(actname,expName)
//     })
//  })
//  })

