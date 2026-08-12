import { BasePage } from '../../src/pages/BasePage.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = page.getByText('Products', { exact: true });
    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = this.inventoryList.locator('.inventory_item');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
    await this.waitForReady();
  }
}
