import { expect, test } from '../../src/fixtures/pagefixtures'
import testData from '../../test-data/test-data.json'

test.beforeEach(async ({ loginPage, forgotPasswordPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.goToForgotPassword();
});




test('validate the forgot password page URL', async ({ loginPage,forgotPasswordPage,baseURL}) => {
    await loginPage.goToForgotPassword();
    await forgotPasswordPage.verifyURL(`${baseURL}opencart/index.php?route=account/forgotten`);
});

test('validate the forgot password page title', async ({ forgotPasswordPage }) => {
    await forgotPasswordPage.verifyPageTitle('Forgot Your Password?');
});

test('validate the forgot password page layout', async ({ forgotPasswordPage }) => {
    await forgotPasswordPage.verifyEmailFieldVisible();
     await forgotPasswordPage.verifyContinueButtonVisible();
})


