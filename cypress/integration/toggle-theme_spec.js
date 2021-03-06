const visit = (darkAppearance) => {
	cy.clearLocalStorageSnapshot();
	cy.restoreLocalStorage();
	cy.visit('/', {
		onBeforeLoad(win) {
			cy.stub(win, 'matchMedia').withArgs('(prefers-color-scheme: dark)').returns({
				matches: darkAppearance,
			});
		},
	});
};
afterEach(() => {
	cy.saveLocalStorage();
});
describe('Theme mode', function () {
	it('Dark theme from OS', function () {
		visit(true);
		cy.getLocalStorage('theme').should('equal', 'dark');
	});
	it('Light theme from OS', function () {
		visit(false);
		cy.getLocalStorage('theme').should('equal', 'light');
	});

	it('Toggle from dark to light mode', function () {
		visit(true);
		cy.get('body').should('have.class', 'dark');
		cy.get('#toggle-theme')
			.should('not.be.visible')
			.check({ force: true })
			.should('be.checked');
		cy.get('.switch-wrapper').click();

		cy.get('#toggle-theme').should('not.be.visible').should('not.be.checked');
		cy.get('body').not('.dark');
		cy.getLocalStorage('theme').should('equal', 'light');
	});

	it('Toggle from light to dark mode', function () {
		visit(false);
		cy.get('body').not('.dark');
		cy.get('#toggle-theme').should('not.be.visible').should('not.be.checked');
		cy.get('.switch-wrapper').click();
		cy.get('#toggle-theme')
			.should('not.be.visible')
			.check({ force: true })
			.should('be.checked');

		cy.get('body').should('have.class', 'dark');
		cy.getLocalStorage('theme').should('equal', 'dark');
	});
});
