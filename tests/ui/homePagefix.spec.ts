import { test } from '../../src/fixtures/pagefixtures'
import testData from '../../test-data/test-data.json'

test.beforeEach(async ({ loginPage }) => {
    const { username, password } = testData.validUser;

    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
});

test('home page title test', async ({ homePage }) => {
    await homePage.verifyHomePageTitle('My Account');
});

test('log out link exists test', async ({ homePage }) => {
    await homePage.verifyLogOutLinkVisible();
});

test('home pages headers test', async ({ homePage }) => {
    await homePage.verifyHeaders(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
});