import { Page, Locator, expect } from "@playwright/test";

/**
 * CommonHelper — shared, low-level Playwright actions and assertions.
 *
 * Why this exists: LoginPage.getpageTitle() and Homepage.gethomepageTitle()
 * were doing the exact same thing (return this.page.title()), and every
 * page object had its own copy of "click this locator" / "check this
 * locator is visible". Instead of repeating that logic in every page
 * object, it lives here once. Every page object gets an instance of this
 * via BasePage (as this.helper), so page objects call this.helper.click(...)
 * instead of locator.click() directly.
 */
export class CommonHelper {


   

    constructor(
        private readonly page: Page
    ) {}

    // ---------- generic actions ----------

    async navigate(path: string): Promise<void> {
        await this.page.goto(path);
    }

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    // ---------- generic assertions ----------
    // These call expect() internally so page objects can expose
    // ready-to-call "verify..." steps, and the spec files never need
    // to import/call expect() themselves.

    async verifyTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async verifyText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toContainText(expectedText);

}

    async verifyURL(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedUrl);
    }
}