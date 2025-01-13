/// <reference types="cypress" />

// describe("My Test Suite", () => {
//   it("Visits the Google website", () => {
//     cy.visit("https://www.google.com");
//     cy.title().should("eq", "Google");
//   });

//   it("Verify title with negavtive", () => {
//     cy.visit("https://www.google.com");
//     cy.title().should("eq", "Gole");
//   });
// });

describe("My first test with cypress", () => {
  it("visit a website", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();
  });
});
