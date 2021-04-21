// https://github.com/cypress-io/cypress-example-recipes/blob/d8c87b46577796dc713834f238b752bde1c6dcd8/examples/stubbing-spying__route2/cypress/integration/offline-spec.js

// https://caniuse.com/online-status
const assertOnline = () => {
	return cy.wrap(window).its('navigator.onLine').should('be.true');
};
const assertOffline = () => {
	return cy.wrap(window).its('navigator.onLine').should('be.false');
};

Cypress.automation('remote:debugger:protocol', {
	command: 'Network.enable',
});

const goOffline = () => {
	cy.log('**offline**')
		.then(() => {
			return Cypress.automation('remote:debugger:protocol', {
				command: 'Network.emulateNetworkConditions',
				params: {
					type: false,
					offline: true,
					latency: -1,
					downloadThroughput: -1,
					uploadThroughput: -1,
				},
			});
		})
		.wait(2000);
};

const goOnline = () => {
	// disable offline mode, otherwise we will break our tests :)
	cy.log('**online**')
		.then(() => {
			// https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
			return Cypress.automation('remote:debugger:protocol', {
				command: 'Network.emulateNetworkConditions',
				params: {
					type: true,
					offline: false,
					latency: -1,
					downloadThroughput: -1,
					uploadThroughput: -1,
				},
			});
		})
		.wait(2000);
};

const visit = (darkAppearance) => {
	goOnline();
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
	goOnline();
	assertOnline();
	cy.saveLocalStorage();
});
describe('Network status', function () {
	it('DARK - Offline mode ans show snackbar', function () {
		visit(true);
		goOffline();
		assertOffline();
	});

	it('LIGHT - Offline mode ans show snackbar', function () {
		visit(false);
		goOffline();
		assertOffline();
	});
});
