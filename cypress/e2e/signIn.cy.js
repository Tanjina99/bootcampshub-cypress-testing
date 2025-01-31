describe("Testing the signin page", () => {
  it("should navigate to the signin page and verify the banner text", () => {
    cy.visit(""); // Visit the homepage or the URL where the banner exists
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
    ).should("have.text", "One Stop Solution for Trade School & Students");
  });

  it.only("Login with a user", () => {
    cy.visit("/"); // Visit the login page
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click(); // Click on the login button

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("tanjina1997@yahoo.com"); // Type the email

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("Rumucute1997@"); // Type the password

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click(); // Click the submit button

    cy.get("#__next > div > div > div.ant-empty-footer > button").click();

    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click();

    cy.get(
      "#header_2 > nav > div > div > ul > li:nth-child(3) > button"
    ).click();

    cy.visit("https://portal.bootcampshub.ai/chat");

    cy.get(".start-button").click();

    cy.contains("li.ant-dropdown-menu-item", "New Crowd").click();

    cy.get("#name").type("Test Crowd");

    cy.get("textarea[placeholder= 'Maximum 200 character']").type(
      "This is an example of a crowd"
    );

    cy.get("button.button.primary").click();

    cy.get("input[placeholder='Search user']").type(
      "khanshohaibhossain@gmail.com"
    );

    cy.get(".info")
      .contains(".email", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Shohaib hossain");
      });

    cy.contains(".user_item", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    cy.get("input[placeholder='Search user']")
      .clear()
      .type("she2farah@gmail.com");

    cy.get(".info")
      .contains(".email", "she2farah@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Khadija Farah");
      });

    cy.contains(".user_item", "she2farah@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    // cy.get(".button.primary").contains("Create").click();

    cy.visit("https://portal.bootcampshub.ai/chat/677f4987c724cd001a36a1cd");

    cy.get(".name-title h4").contains("Test Crowd").click();

    // cy.get(".members-card")
    //   .contains("Khadija Farah")
    //   .parents(".members-card")
    //   .within(() => {
    //     cy.get(".action-btn").click();
    //   });

    // cy.contains("button", "Remove").click();

    // cy.get("h1.message-title")
    //   .contains("Are you sure to remove this member?")
    //   .should("be.visible");

    // cy.get("button.button.primary.w-full").click();

    // cy.get("button.archive-group").click();

    cy.get("button.icon-btn").eq(1).click(); // Clicks the second button (index starts at 0)

    // cy.contains("Photos & Videos").click();
    cy.get("div").contains("Photos & Videos").click();

    cy.get("input[type='file']").attachFile("logo.png");

    // cy.get(
    //   "#__next > div > div > div > div.chat-body-wrap > div > div > div > div.m-96bdd299.mantine-Grid-col.chat-inbox-wrapper.__m__-r23 > div > div > div.inbox-footer > div > div > div.text-editor > div.editor-input > div.text_editor > div > div > textarea"
    // ).type("This is a image of logo");
    cy.get(".text_input_box__input").type("This is a image of logo");

    cy.get(".icon-btn.sent-btn").click();
  });
});
