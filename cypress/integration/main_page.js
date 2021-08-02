describe ('Prompt Question Page', () => {

    const questionsReq = 'https://localhost:3001/api/questions'

    beforeEach(() => {
        cy.intercept('GET', questionsReq, {
            statusCode: 200,
            fixture: 'question_data'
        })
        cy.visit('http://localhost:3000/')
    })
    
    it('should be able to visit the app and display the logo and shuffle button', () => {
        cy.get('#onlyDevsLogo').should("have.attr", "src")
        cy.get('.question-form')
        cy.get('.shuffle-btn')
        cy.contains('Shuffle Question')
    })

    it('should be able to navigate to all questions view', () => {
        cy.get("#31  > .view-details-btn")
        .click()
        .url().should('include', '/question-details/31')
        cy.contains('Inside What life cycle methods should you do fetch calls in React?')
    })

    it('Should be able to be able to navigate back and forward in browser', () => {
        cy.visit('http://localhost:3000/questions-details/31')
          .go('back')
          .url().should('eq','http://localhost:3000/')
          .go('forward')
          .url().should('eq','http://localhost:3000/questions-details/31')
    })

    it('Should not show a submit button when form is blank', () => {
        cy.get('.submit-btn').should('not.be.visible')
    })

    it('Should check that when data is put into the form, the value is reflected in that form input', () => {
        cy.get('textarea').type('Hello, Coders!').should('have.value', 'Hello, Coders!')
    })

    it('Should show a submit button when text is typed into the form', () => {
        cy.get('textarea').type('Cool stuff').should('have.value', 'Cool stuff')
        cy.get('.submit-btn').should('be.visible')
    })





})