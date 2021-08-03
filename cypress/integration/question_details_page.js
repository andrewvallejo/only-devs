describe ('Questions Details page', () => {

    beforeEach(() => {
        cy.fixture('question_data')
        .then((questions) => {
            console.log(questions)
            cy.intercept('GET','https://onlydevs-api.herokuapp.com/questions/', {
            statusCode: 201,
            body: questions
            })
        })
        cy.fixture('answer_data').then((answers) => {
            console.log(answers)
            cy.intercept('GET','https://onlydevs-api.herokuapp.com/questions/3', {
            statusCode: 201,
            body: answers
            })
        })
        cy.visit('http://localhost:3000')
        cy.wait(1000)

    }); 

    // const questionsReq = 'https://onlydevs-api.herokuapp.com/questions'
    // const answersReq = 'https://onlydevs-api.herokuapp.com/questions/3'

    // beforeEach(() => {
    //     cy.intercept('GET', questionsReq, {
    //         statusCode: 201,
    //         fixture: 'question_data'
    //     })
    //     cy.intercept('GET', answersReq, {
    //         statusCode: 201,
    //         fixture: 'answer_data'
    //     } )
    //     cy.visit('http://localhost:3000/')
    // })

it('Should be able to search for question by keyword', () => {
    cy
    .get('input[type="text"]')
    .type('Props')
    .should('have.css', 'font-family') 
    .and('match', /serif/)
})



});