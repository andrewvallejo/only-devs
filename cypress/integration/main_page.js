describe ('Main Page', () => {

    // const questionsReq = 'https://onlydevs-api.herokuapp.com/questions/'

    beforeEach(() => {
        cy.intercept('GET', 'https://onlydevs-api.herokuapp.com/questions/', {
            statusCode: 201,
            fixture: 'question_data'
        })
        cy.visit('http://localhost:3000/')
        cy.wait(500)
    })
    
    it('Should be able to visit the app and display the logo and shuffle button', () => {
        cy.get('#onlyDevsLogo').should("have.attr", "src")
        cy.get('.question-form')
        cy.get('.shuffle-btn')
        cy.contains('Shuffle Question')
    })

    it('Should be able to navigate to all questions view', () => {
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

    it('Should remove the submit button when text is removed and the form is blank again', () => {
        cy.get('textarea').type('Cool stuff').should('have.value', 'Cool stuff').clear()
        cy.get('.submit-btn').should('not.be.visible')  
    })

    it('Should display the correct number of characters left when text is type into the form', () => {
        cy.get('textarea').type('Hi!').should('have.value', 'Hi!')
        cy.get('.char-counter').contains('297/300')
    })

    it('Should display a gold background on the go to answers button after submitting an answer', () => {
        cy.get('textarea').type('Hi!').should('have.value', 'Hi!')
        cy.get('.submit-btn').click()
        cy.get('.go-to-answers').should('have.css', 'background', 'rgb(255, 215, 0) none repeat scroll 0% 0% / auto padding-box border-box')
    })

    it('Should be able to type in the search field', () => {
        cy
          .get('input[type="text"]')
          .type('Hoisting')
          .should('have.value', 'Hoisting')
      })
  
    it('Should be able to display only the question card(s) that match search criteria', () => {
        cy
          .get('input[type="text"]')
          .type('app')
          .get('.cards-container')
          cy.get('[href="/question-details/34"]')
          .contains('MVC')
    })
    
})