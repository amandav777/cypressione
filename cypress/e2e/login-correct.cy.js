describe('login com user e senha corretos', () => {
  it('logar com dados todos corretos', () => {

    // 3. Verify that home page is visible successfully
    // 5. Verify 'Login to your account' is visible

    // 7. Click 'login' button
    // 8. Verify that 'Logged in as username' is visible
    
    // 2. Navigate to url 
    cy.visit('http://automationexercise.com');
    
    // 4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    
    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type('soueuaamanda@gmail.com');
    cy.get('[data-qa="login-password"]').type('password');
    cy.get('[data-qa="login-button"]').click();
    
    // 9. Click 'Delete Account' button
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();

    
    
    // 10. Verify that 'ACCOUNT DELETED!' is visible




  })
})