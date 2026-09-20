import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Homepage extends BasePage {

    // Private Locators
    private readonly logOut: Locator;
    private readonly addressBook: Locator;
    private readonly headers: Locator;

    constructor(page: Page) {
        super(page);
        this.logOut = page.getByRole('link', { name: 'Logout' });
        this.addressBook = page.getByRole('link', { name: 'Address Book' });
        this.headers = page.getByRole('heading', { level: 2 });
    }

    // ---------- assertions (called as steps from the spec) ----------

    async verifyHomePageTitle(expectedTitle: string): Promise<void> {
        await this.helper.verifyTitle(expectedTitle);
    }

    async verifyLogOutLinkVisible(): Promise<void> {
        await this.helper.verifyVisible(this.logOut);
    }

    async verifyAddressBookVisible(): Promise<void> {
        await this.helper.verifyVisible(this.addressBook);
    }

    // Not a simple "is this one locator visible" check (it's a full list
    // compare), so it stays here rather than in the generic helper.
    async verifyHeaders(expectedHeaders: string[]): Promise<void> {
        const actualHeaders = await this.headers.allInnerTexts();
        expect(actualHeaders).toHaveLength(expectedHeaders.length);
        expect(actualHeaders).toEqual(expectedHeaders);
    }
}
