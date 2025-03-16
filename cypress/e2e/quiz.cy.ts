describe('Tech Quiz End-to-End', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    cy.visit('http://127.0.0.1:3001');
  });

  it('completes the quiz and shows the score', () => {
    // Start the quiz by clicking the "Start Quiz" button
    cy.get('.btn-primary').contains('Start Quiz').should('be.visible').and('not.be.disabled').click();
    
    // Wait for the API call and mock response
    cy.wait('@getQuestions', { timeout: 15000 });
    
    // Ensure the first question is visible
    cy.get('.card', { timeout: 15000 }).contains('What is JavaScript?').should('be.visible');
    
    // Answer the first question
    cy.get('.btn-primary').contains('1').click();
    
    // Ensure the second question is visible
    cy.get('.card').contains('What is React?').should('be.visible');
    cy.get('.btn-primary').contains('1').click();
    
    // Ensure the third question is visible
    cy.get('.card').contains('What does CSS stand for?').should('be.visible');
    cy.get('.btn-primary').contains('1').click();
    
    // Ensure the fourth question is visible
    cy.get('.card').contains('What is Git used for?').should('be.visible');
    cy.get('.btn-primary').contains('1').click();
    
    // Ensure the fifth question is visible
    cy.get('.card').contains('What is an API?').should('be.visible');
    cy.get('.btn-primary').contains('1').click();
    
    // Ensure the sixth question is visible
    cy.get('.card').contains('What is TypeScript?').should('be.visible');
    cy.get('.btn-primary').contains('1').click();

    // After answering all questions, check if the score alert is visible
    cy.get('.alert-success', { timeout: 10000 }).contains('Your score: 6/6').should('be.visible');

    // Check if the "Take New Quiz" button is now visible
    cy.get('.btn-primary').contains('Take New Quiz').should('be.visible').click();

    // Verify that the first question is displayed again
    cy.get('.card').contains('What is JavaScript?').should('be.visible');
  });
});
