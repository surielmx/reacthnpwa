describe('Pagination', function () {
	it('Navigate between pages', function () {
		cy.visit('/news/1');
		cy.location('pathname').should('eq', '/news/1');
		cy.get('#next-page').should('contain', 'next').click();
		cy.location('pathname').should('eq', '/news/2');
		cy.get('#previous-page').should('contain', 'prev').click();
		cy.location('pathname').should('eq', '/news/1');
		cy.get('#next-page').should('contain', 'next').click();
		cy.location('pathname').should('eq', '/news/2');
		cy.get('#next-page').should('contain', 'next').click();
		cy.location('pathname').should('eq', '/news/3');
	});
	it('Navigate between pages from url', function () {
		cy.visit('/news/2');
		cy.go(1);
		cy.location('pathname').should('eq', '/news/2');
		cy.visit('/newest/5');
		cy.go(1);
		cy.location('pathname').should('eq', '/newest/5');
		cy.visit('/jobs/1');
		cy.go(1);
		cy.location('pathname').should('eq', '/jobs/1');
	});
});
