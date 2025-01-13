describe("Assertions", () => {
  // it("My first assertion", () => {
  //   cy.visit("https://www.bootcampshub.ai/branch-landing-page");
  //   cy.get(
  //     "#__next > div > div > header > div > div.logoDiv_parent > div > a > img"
  //   ).should("be.visible");
  //   cy.get(
  //     "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
  //   ).should("have.text", "One Stop Solution for Trade School & Students");
  //   cy.get(
  //     "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
  //   ).should("contain.text", "One");
  //   cy.get("#__next > div > div > section.b1 > div.banner_main > div").should(
  //     "have.class",
  //     "left_img"
  //   );
  // });

  it.only("Check the text", () => {
    cy.visit("");
    const selector =
      "#__next > div > div > section.explore > div > div.right_div > h2";
    const text = "Why Explore BootcampsHub?";
    cy.haveText(selector, text);
  });
});
