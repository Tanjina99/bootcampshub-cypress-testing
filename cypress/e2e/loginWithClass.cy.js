import LoginPage from "../page/login";

describe("Login with PMO model", () => {
  // it("Logging with class", () => {
  //   const loginPage = new LoginPage();
  //   loginPage.visit();
  //   loginPage.clickLoginBtn();
  //   loginPage.typeEmail();
  //   loginPage.typePassword();
  //   loginPage.clickSubmit();
  // });

  it.only("Logging with data from json file", () => {
    const loginPage = new LoginPage();
    loginPage.visit("");
    cy.fixture("loginInformation.json").then((data) => {
      loginPage.loginWithData(data.email, data.password);
    });
    cy.url().should("include", "/dashboard");
  });
});
