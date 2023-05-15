describe('template spec', () => {
	it('passes', () => {
		cy.visit('/');
		cy.get('nav li:first').click();
		cy.get('ul li:first').click();
		cy.get('[data-testid="book-screening-btn"]:first').click();
	});
});
