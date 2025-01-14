describe("Verify All Products and product detail page", () => {
  it("ver os produtos", () => {
    // Navigate to url
    cy.visit("http://automationexercise.com");

    // Click on 'Products' button
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.get('.features_items');
    cy.contains("View Product").click();
  });
});

// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
