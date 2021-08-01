describe('Error Handling', () => {

      it('Should display error message for 500 status code', () => {
        cy
          .intercept('https://onlydevs-api.herokuapp.com/questions', {statusCode: 500})
          .visit('http://localhost:3000/')
          .contains('Oops server is down! Please try again.')
      });

      it('Should display error message for 400 status code', () => {
        cy
          .intercept('https://onlydevs-api.herokuapp.com/questions', {statusCode: 400})
          .visit('http://localhost:3000/')
          .contains('Oops server is down! Please try again.')
      });

      it('Should display error message for 404 status code', () => {
        cy
          .intercept('https://onlydevs-api.herokuapp.com/questions', {statusCode: 404})
          .visit('http://localhost:3000/')
          .contains('Oops server is down! Please try again.')
      });

      it('Should show error message when a question details page does not load', () => {
        cy
          .intercept('https://onlydevs-api.herokuapp.com/questions/54', {statusCode: 404})
          .visit('http://localhost:3000/question-details/54')
        //   .get('.errorLoading')
          .contains('')
      });
});