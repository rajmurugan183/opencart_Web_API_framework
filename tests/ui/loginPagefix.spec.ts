import { expect, test } from '../../src/fixtures/pagefixtures'
import testData from '../../test-data/test-data.json'

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});



test('page title test', async ({ loginPage }) => {
    await loginPage.verifyPageTitle('Account Login');
});

test('forget link test', async ({ loginPage }) => {
    await loginPage.verifyForgotPasswordLinkVisible();
});



test('rejectInvalidCredentialsWithWarningMessage', async ({ loginPage }) => {

    await loginPage.login('invaliduser@test.com', 'wrongPassword123');
    await loginPage.verifyInvalidCredentialsWarning('Warning: No match for E-Mail Address and/or Password.');
});


