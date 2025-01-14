describe("login com user e senha corretos", () => {
    it("logar com dados todos corretos", () => {
  
      // Navigate to url
      cy.visit("http://automationexercise.com");
  
      // Click on 'Signup / Login' button
      cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
  
      // Enter correct email address and password
      cy.get('[data-qa="login-email"]').type("soueuaamanda@gmail.com");
      cy.get('[data-qa="login-password"]').type("passworde");
      cy.get('[data-qa="login-button"]').click();
    
      cy.contains('Your email or password is incorrect!');

    });
  });
  