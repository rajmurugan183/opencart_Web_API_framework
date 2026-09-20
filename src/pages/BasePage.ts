import { Page } from "@playwright/test";
import { CommonHelper } from "../utils/CommonHelper";

export class BasePage {

    protected readonly page: Page;
    protected readonly helper: CommonHelper;

    constructor(page: Page) {
        this.page = page;
        this.helper = new CommonHelper(page);
    }
}
