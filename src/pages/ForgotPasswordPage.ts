

import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ForgotPasswordPage extends BasePage {

     private readonly emailAddress: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailAddress = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

      async verifyURL(expectedUrl: string): Promise<void> {
        await this.helper.verifyURL(expectedUrl);
    }



    async verifyPageTitle(expectedTitle: string): Promise<void> {
 
        await this.helper.verifyTitle(expectedTitle);

}

 async verifyEmailFieldVisible(): Promise<void> {
        await this.helper.verifyVisible(this.emailAddress);
    }

    async verifyContinueButtonVisible(): Promise<void> {
        await this.helper.verifyVisible(this.continueButton);
    }
}

