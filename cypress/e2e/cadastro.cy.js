describe("funcionalidades de cadastro", () => {// describe serve pra agrupar testes gerais
  beforeEach(() => {
    cy.visit("https://automationexercise.com");
  });

  it("cadastrar um novo usuário", () => { // it define testes especificos, menores

  // pegar o botao no dom e clicar
   cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

  // cadastrar
  cy.get('[data-qa="signup-name"]').type("Amanda");
  cy.get('[data-qa="signup-email"]').type("soueuaamanda@gmail.com");

  // submit
  cy.get('[data-qa="signup-button"]').click();

  // preencher o perfil
  cy.get("#id_gender2").click();
  cy.get('[data-qa="password"]').type("password");
  cy.get('[data-qa="days"]').select("23");
  cy.get('[data-qa="months"]').select("March");
  cy.get('[data-qa="years"]').select("2004");
  cy.get('#newsletter').click();
  cy.get('#optin').click();

  // preencher o endereço
  cy.get('[data-qa="first_name"]').type("Rua");
  cy.get('[data-qa="last_name"]').type("Cypressa");
  cy.get('[data-qa="company"]').type("Cypress da Silva");
  cy.get('[data-qa="address"]').type("777-666-555");
  cy.get('[data-qa="country"').select("Australia");
  cy.get('[data-qa="state"]').type("SP");
  cy.get('[data-qa="city"]').type("Pompéia");
  cy.get('[data-qa="zipcode"]').type("777");
  cy.get('[data-qa="mobile_number"]').type("14981744693");

  // pressionar o botao e enviar o formulario
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="continue-button"]').click();


  // deslogar 
  cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
  cy.get('[data-qa="continue-button"]').click();

  // inserir dados de login
  // cy.get('[data-qa="login-email"]').type("soueuaamanda@gmail.com");
  // cy.get('[data-qa="login-password"]').type("password");

  // cy.get('[data-qa="login-button"]').click();

  // // DELETAR CONTA
  // cy.get(".shop-menu > .nav > :nth-child(5) > a").click();


  });


});
