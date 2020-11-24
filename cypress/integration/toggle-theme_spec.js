const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentMode = prefersDarkScheme.matches ? 'dark' : 'light';
const notCurrentMode = prefersDarkScheme.matches ? 'light' : 'dark';
const beChecked = prefersDarkScheme.matches ? 'be.checked' : 'not.be.checked';

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
		cy.get('body').should('have.class', currentMode);
		cy.get('body').not(`.${notCurrentMode}`);
		cy.get('#toggle-theme').should('not.be.visible').should(beChecked);
		cy.get('.switch-wrapper').click();

		cy.get('#toggle-theme').should('not.be.visible').should('not.be.checked');
		cy.get('body').not(`.${currentMode}`);
		cy.get('body').should('have.class', notCurrentMode);
		cy.getLocalStorage('theme').should('equal', notCurrentMode);
	});

	it('Toggle from light to dark mode', function () {
		visit(false);
		cy.get('body').should('have.class', notCurrentMode);
		cy.get('body').not(`.${currentMode}`);
		cy.get('#toggle-theme').should('not.be.visible').check({ force: true }).should(beChecked);
		cy.get('.switch-wrapper').click();
		cy.get('#toggle-theme')
			.should('not.be.visible')
			.check({ force: true })
			.should('be.checked');

		cy.get('body').not(`.${notCurrentMode}`);
		cy.get('body').should('have.class', currentMode);
		cy.getLocalStorage('theme').should('equal', currentMode);
	});
});
