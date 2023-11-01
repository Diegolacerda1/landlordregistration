import registrationPage from "../../page_objects/registrationPage";
import { faker } from "@faker-js/faker";

describe("Registration Test Case Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const firstName = "";
  const lastName = "";
  const email = "";

  it("XL-2 new user owner registration", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();

    //Click on "sign up" to navigate to Create an Account page
    cy.get('[class="link-primary fw-bolder"]').click();
    cy.contains("Create an Account");

    //Type first name and last name
    registrationPage.firstNameInput.type(firstName);
    registrationPage.lastNameInput.type(lastName);

    //type email
    registrationPage.emailInput.type(email);

    //type password and confirmation password
    registrationPage.passwordInput.type("Diego34526261@");
    registrationPage.confirmPasswordInput.type("Diego34526261@");

    //choose role as owner
    registrationPage.ownerBtn.click();

    //check box agreement
    registrationPage.checkBoxAgreementBtn.click();

    //click on submit button
    registrationPage.submitBtn.click();

    //assertion
    cy.contains("Properties");
  });
});
