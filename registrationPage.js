class RegistrationPage {
    get firstNameInput() {return cy.get('[placeholder="First Name"]')}
    get lastNameInput() {return cy.get('[placeholder="Last Name"]')}
    get emailInput() {return  cy.get('[placeholder="Email"]')}
    get passwordInput() {return cy.get('[placeholder="Password"]')}
    get confirmPasswordInput() {return cy.get('[placeholder="Confirm password"]')}
    get ownerBtn() {return  cy.get('[for="kt_property_size_select_OWNER"]')}
    get checkBoxAgreementBtn() {return cy.get('[name="agree"]')}
    get submitBtn() {return cy.get ('[type="submit"]')}
}

export default new RegistrationPage()