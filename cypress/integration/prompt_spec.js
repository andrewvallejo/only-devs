describe ('Prompt Question Page', () => {

    const questionsReq = 'https://localhost:3001/api/questions'

    beforeEach(() => {
        cy.intercept('GET', questionsReq, {
            statusCode: 200,
            fixture: 'question_data'
        })
        cy.visit('http://localhost:3000/')
    })
    
    it('should be able to visit the app and display the site', () => {
        cy.contains('OnlyDevs')
        cy.contains('View All Questions')
        cy.get('.question-form')
        cy.contains('Submit Answer')
    })

    it('should be able to navigate to all questions view', () => {
        cy.get('.view-all-btn')
        .click()
        .url().should('include', '/all-questions')
        cy.contains('Describe event bubbling.')
    })













})