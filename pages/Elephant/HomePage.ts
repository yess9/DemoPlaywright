import { Page } from '@playwright/test'; // ✅ correcto, no 'playwright'

export class HomePage {
  constructor(private page: Page) {}

   async navigaHomePage(){
      await this.page.goto('http://demo.guru99.com/payment-gateway/index.php', {
     waitUntil: 'domcontentloaded'
       });
    }

    async abrirPopupTarjeta(): Promise<Page> {
    const popupPromise = this.page.waitForEvent('popup', { timeout: 15000 });
    await this.page.getByRole('link', { name: 'Generate Card Number' }).click();
    const popup = await popupPromise;
    await popup.waitForLoadState('domcontentloaded');
    return popup;
  }

    async bringToFront() {
    await this.page.bringToFront();
  }

    async retornaHome(){
        return this.page;
    }

    async irEstadoCompra() {
      await this.page.getByRole('link', { name: 'Check Credit Card Limit' }).click();
    await this.page.waitForLoadState('domcontentloaded');
  }


    







}