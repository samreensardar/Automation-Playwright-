import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Products' });
    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
    await this.waitForReady();
  }
}