
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Functionality', () => {

    test('LOGIN-001: Successful login with valid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Step 1: Navigate to login page
        await loginPage.navigate();

        // Step 2: Verify login page
        await expect(page).toHaveURL(/login/);

        // Step 3: Login using valid credentials
        await loginPage.login(
            process.env.TEST_EMAIL!,
            process.env.TEST_PASSWORD!
        );

        // Step 4: Verify successful login
        await loginPage.verifySuccessfulLogin();

    });

});