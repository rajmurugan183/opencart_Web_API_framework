import { expect, test } from '../../src/fixtures/pagefixtures'
import testData from '../../test-data/test-data'

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

    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await loginPage.verifyInvalidCredentialsWarning(testData.invalidLoginMessage);
});


