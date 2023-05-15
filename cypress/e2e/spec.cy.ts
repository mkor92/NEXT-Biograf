describe('template spec', () => {
	it('passes', () => {
		// visit the site and click on "filmer" (movies)
		cy.visit('/');
		cy.get('nav li:first').click();

		// click the first movie
		cy.get('ul li:first').click();

		// click the first screening
		cy.get('[data-testid="book-screening-btn"]:first').click();

		// choose number of tickets, seat and click guest button
		cy.get('[data-testid="ticket-count-plus"]').click();
		cy.get('.seat-available:first').click();
		cy.get('[data-testid="guest-btn"]').click();

		// fill form and click continue
		cy.get('input:first').type('John Doe');
		cy.get('input:last').type('john@doe.com');
		cy.get('button').click();
	});
});
