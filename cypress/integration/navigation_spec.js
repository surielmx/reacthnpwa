describe('Navigation', function () {
	it('Home page', function () {
		cy.visit('/');
		cy.location('pathname').should('eq', '/news/1');
	});
	it('Go to newest page', function () {
		cy.visit('/');
		cy.get('#newest-link').should('contain', 'Newest').click();
		cy.location('pathname').should('eq', '/newest/1');
	});
	it('Go to show page', function () {
		cy.visit('/');
		cy.get('#show-link').should('contain', 'Show').click();
		cy.location('pathname').should('eq', '/show/1');
	});
	it('Go to ask page', function () {
		cy.visit('/');
		cy.get('#ask-link').should('contain', 'Ask').click();
		cy.location('pathname').should('eq', '/ask/1');
	});
	it('Go to jobs page', function () {
		cy.visit('/');
		cy.get('#jobs-link').should('contain', 'Jobs').click();
		cy.location('pathname').should('eq', '/jobs/1');
	});
	it('Go to news page', function () {
		cy.visit('/');
		cy.get('#news-link').should('contain', 'News').click();
		cy.location('pathname').should('eq', '/news/1');
	});
});
