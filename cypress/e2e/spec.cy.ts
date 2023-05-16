describe('Book ticket', () => {
	it('visit site and book a ticket as a guest', () => {
		// visit the site and click on "filmer" (movies)
		cy.visit('/');
		cy.get('nav li:first').click();

		// click the first movie
		cy.get('ul li:first').click();

		// click the first screening
		cy.get('[data-testid="book-screening-btn"]:first').click();

		// choose number of tickets, seat and click guest button
		cy.wait(2000);
		cy.get('[data-testid="ticket-count-plus"]').click();
		cy.get('.seat-available:first').click();
		cy.get('[data-testid="guest-btn"]').click();

		// fill form and click continue
		cy.get('input:first').type('Cypress Test');
		cy.get('input:last').type('cypress.guest@test.com');
		cy.get('button').click();

		// choose payment method and click pay
		cy.get('[data-testid="payment-method"]:first').click();
		cy.get('button').click();
		cy.contains('Bokning bekräftad!');
	});

	it('visit site and book a ticket as logged in user', () => {
		// visit the site
		cy.visit('/');

		// click "Logga in" (login)
		cy.get('li').contains('Logga in').click();

		// fill in login form
		cy.get('input:first').type('user@one.com');
		cy.get('input:last').type('abc123');
		cy.get('button').click();

		// click on "filmer" (movies)
		cy.wait(2000);
		cy.get('nav li:first').click();

		// // click the first movie
		cy.get('ul li:first').click();

		// // click the first screening
		cy.get('[data-testid="book-screening-btn"]:first').click();

		// choose number of tickets, seat and click "fortsätt" (continue) button
		cy.wait(2000);
		cy.get('[data-testid="ticket-count-plus"]').click();
		cy.get('.seat-available:first').click();
		cy.get('button:first').click();

		// choose payment method and click pay
		cy.get('[data-testid="payment-method"]:first').click();
		cy.get('button').click();
		cy.contains('Bokning bekräftad!');
	});
});
