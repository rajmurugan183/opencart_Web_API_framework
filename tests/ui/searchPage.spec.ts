import { test } from '../../src/fixtures/pagefixtures'
import testData from '../../test-data/test-data.json'

test.beforeEach(async ({ loginPage }) => {
    const { username, password } = testData.validUser;

    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
});

test('test notebooks and laptops drop down', async ({ searchPage }) => {
    await searchPage.viewLaptopsAndNotebooks();
    await searchPage.verifyLaptopsAndNotebooksHeaderVisible();
});

test('add item', async ({ searchPage }) => {
    await searchPage.viewLaptopsAndNotebooks();
    await searchPage.viewItem('Macbook Air');
    await searchPage.verifyProductDisplayed('Macbook Air');
});
