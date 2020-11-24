describe('Navigation', function () {
	beforeEach(() => {
		cy.visit('/');
	});
	it('Home page', function () {
		cy.request('https://api.hnpwa.com/v0/news/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.location('pathname').should('eq', '/news/1');
	});
	it('Go to newest page', function () {
		cy.get('#newest-link').should('contain', 'Newest').click();
		cy.request('https://api.hnpwa.com/v0/newest/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.go(1);
		cy.location('pathname').should('eq', '/newest/1');
	});
	it('Go to show page', function () {
		cy.get('#show-link').should('contain', 'Show').click();
		cy.request('https://api.hnpwa.com/v0/show/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.go(1);
		cy.location('pathname').should('eq', '/show/1');
	});
	it('Go to ask page', function () {
		cy.get('#ask-link').should('contain', 'Ask').click();
		cy.request('https://api.hnpwa.com/v0/ask/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.go(1);
		cy.location('pathname').should('eq', '/ask/1');
	});
	it('Go to jobs page', function () {
		cy.get('#jobs-link').should('contain', 'Jobs').click();
		cy.request('https://api.hnpwa.com/v0/jobs/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.go(1);
		cy.location('pathname').should('eq', '/jobs/1');
	});
	it('Go to news page', function () {
		cy.get('#news-link').should('contain', 'News').click();
		cy.request('https://api.hnpwa.com/v0/news/1.json').should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(30);
		});
		cy.go(1);
		cy.location('pathname').should('eq', '/news/1');
	});
});
