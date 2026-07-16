export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    throw new Error('goto() must be implemented by a subclass');
  }

  async waitForReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}