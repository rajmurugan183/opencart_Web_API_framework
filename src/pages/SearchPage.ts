import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {

    // Private Locators
    private readonly laptopsNnotebooks: Locator;
    private readonly showAllNoteBookslaptops: Locator;
    private readonly headerNotebookslaptops: Locator;

    constructor(page: Page) {
        super(page);
        this.laptopsNnotebooks = page.getByRole('link', { name: 'Laptops & Notebooks' }).nth(0);
        this.showAllNoteBookslaptops = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
        this.headerNotebookslaptops = page.getByRole('heading', { name: 'Laptops & Notebooks', level: 2 });
    }

    // Parametrized locators stay private now — the spec no longer needs
    // to reach in and assert on them directly, it just calls a verify step.
    private item(productName: string): Locator {
        return this.page.locator('.caption').getByText(productName).nth(0);
    }

    private productTitle(productName: string): Locator {
        return this.page.getByRole('heading', { name: productName, level: 1 });
    }

    // ---------- actions (the "step" methods a spec calls) ----------

    async viewLaptopsAndNotebooks(): Promise<void> {
        await this.helper.hover(this.laptopsNnotebooks);
        await this.helper.click(this.showAllNoteBookslaptops);
    }

    async viewItem(productName: string): Promise<void> {
        await this.helper.hover(this.laptopsNnotebooks);
        await this.helper.click(this.item(productName));
    }

    // ---------- assertions (also called as steps from the spec) ----------

    async verifyLaptopsAndNotebooksHeaderVisible(): Promise<void> {
        await this.helper.verifyVisible(this.headerNotebookslaptops);
    }

    async verifyProductDisplayed(productName: string): Promise<void> {
        await this.helper.verifyVisible(this.productTitle(productName));
    }
}
