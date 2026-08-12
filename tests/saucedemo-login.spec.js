import { test, expect } from '../src/fixtures/base.js';
import { LoginPage } from './pages/login-page.js';
import { InventoryPage } from './pages/inventory-page.js';
import users from './data/users.json' assert { type: 'json' };

test.describe('SauceDemo login', () => {
  test('Successful login with standard_user @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const user = users.standard;

    await test.step('Open the SauceDemo login page', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Authenticate with standard_user credentials', async () => {
      await loginPage.login(user.username, user.password);
    });

    await test.step('Verify the inventory page is displayed', async () => {
      await expect(inventoryPage.pageHeading).toBeVisible();
      await expect(inventoryPage.inventoryList).toBeVisible();
      await expect(inventoryPage.inventoryItems.first()).toBeVisible();
    });
  });
});
