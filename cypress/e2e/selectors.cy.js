describe("selectors", () => {
  it("Get a selector", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    cy.get("#__next");

    cy.get(".brandLandingPage_container");
    cy.get('[class*="circle"]');
  });
});
