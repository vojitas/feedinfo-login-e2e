import LoginPage from '../../support/pageObjects/LoginPage'

describe('User authentication', () => {
    const loginPage=new LoginPage();

    before(() => {
        cy.fixture('loginData.json').then((data) => {
          globalThis.data=data
        })
    })

    beforeEach(() => {
        loginPage.goToLoginPage()
    })

    it('Non-existing user', () => {
        cy.login(globalThis.data.email,globalThis.data.password)
        loginPage.getErrorMessage()
            .should('have.text',globalThis.data.nonExistingUserMessage)
            .should('be.visible')
    })

    it('Invalid e-mail', () => {
        cy.login(globalThis.data.incorrectEmail,globalThis.data.password)
        loginPage.getErrorMessage()
            .should('have.text',globalThis.data.incorrectEmailMessage)
            .should('be.visible')
    })

    it('Short password', () => {
        cy.login(globalThis.data.email,globalThis.data.incorrectPassword)
        loginPage.getErrorMessage()
            .should('have.text',globalThis.data.shortPasswordMessage)
            .should('be.visible')
    })

    it('Empty username', () => {
        loginPage.getPassword().type(globalThis.data.password)
        loginPage.getSubmitButton().wait(1000).click()
        loginPage.getErrorMessage()
            .should('have.text',globalThis.data.emptyLoginFieldMessage)
            .should('be.visible')
    })

    it('Empty password', () => {
        loginPage.getUsername().type(globalThis.data.email)
        loginPage.getSubmitButton().click()
        loginPage.getErrorMessage()
            .should('have.text',globalThis.data.emptyPasswordFieldMessage)
            .should('be.visible')
    })

    it('Forgotten password', () => {
        loginPage.getForgottenPassword().wait(1000).click();
        cy.location('pathname').should('eq','/forgotten-password/')
    })

    it('Free demo', () => {
        loginPage.getFreeDemo().wait(1000).invoke('removeAttr','target').click();
        cy.location('pathname').should('eq','/demo')
    })
})