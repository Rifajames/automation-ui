
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboard: Locator;

    constructor(page: Page) {

        this.page = page;

        this.emailInput = page.getByLabel('Email');

        this.passwordInput = page.getByLabel('Password');

        this.loginButton = page.getByRole('button', {
            name: 'Login',
            exact: true
        });

        this.dashboard = page.getByTestId('dashboard');
    }

    async navigate() {

        await this.page.goto('/login');

        await expect(this.loginButton).toBeVisible();
    }

    async login(email: string, password: string) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async verifySuccessfulLogin() {

        await expect(this.page).toHaveURL(/dashboard/);

        await expect(this.dashboard).toBeVisible();
    }
}