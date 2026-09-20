import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    

    // Private Locators
    private readonly emailid: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly forgotPasswordLink: Locator;
    private readonly logo: Locator;
    private readonly warningMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.logo = page.getByRole('img', { name: 'naveenopencart' });
        this.warningMessage = page.getByRole('alert');



    }

   



  async verifyInvalidCredentialsWarning(expectedMessage: string): Promise<void> {
    await this.helper.verifyVisible(this.warningMessage);
    await this.helper.verifyText(this.warningMessage, expectedMessage);
}
    // ---------- actions (the "step" methods a spec calls) ----------

    async goToLoginPage(): Promise<void> {
        await this.helper.navigate('opencart/index.php?route=account/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.helper.fill(this.emailid, username);
        await this.helper.fill(this.password, password);
        await this.helper.click(this.loginButton);
    }

    // ---------- assertions (also called as steps from the spec) ----------

    async verifyPageTitle(expectedTitle: string): Promise<void> {
        await this.helper.verifyTitle(expectedTitle);
    }

    async verifyForgotPasswordLinkVisible(): Promise<void> {
        await this.helper.verifyVisible(this.forgotPasswordLink);
    }

    async goToForgotPassword(): Promise<void> {
        await this.helper.click(this.forgotPasswordLink);
    }
}


