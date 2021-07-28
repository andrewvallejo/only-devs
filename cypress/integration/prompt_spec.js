describe ('Prompt Question Page', () => {

    const questionsReq = 'https://localhost:3001/api/questions'

    beforeEach(() => {
        cy.intercept('GET', questionsReq, {
            statusCode: 200,
            fixture: 'question_data'
        })
        cy.visit('http://localhost:3000/')
    })
    












})