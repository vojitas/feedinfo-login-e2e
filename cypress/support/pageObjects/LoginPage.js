class LoginPage {
    goToLoginPage() {
        return cy.visit('login-page/')
    }

    getUsername() {
        return cy.get('#email1v')
    }

    getPassword() {
        return cy.get('#password1v')
    }

    getSubmitButton() {
        return cy.contains('Submit')
    }

    getErrorMessage() {
        return cy.get('.field-validation-error')
    }

    getForgottenPassword() {
        return cy.contains('Forgotten password')
    }

    getFreeDemo() {
        return cy.contains('Get your free Feedinfo demo')
    }
}

export default LoginPage;