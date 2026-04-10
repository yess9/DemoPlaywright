import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async ingresarNumeroTarjeta(tarjeta: string) {
     await this.page.waitForLoadState();
    await this.page.getByRole('textbox', { name: 'Enter Your Card Number' }).fill(tarjeta);

  }

  async ingresarMes(month: string) {
     await this.page.locator('#month').selectOption(month);
  }

  async ingresarAnio(year: string) {
    await this.page.locator('#year').selectOption(year);
  }
  async ingresarCVV(cvv: string) {
    await this.page.getByRole('textbox', { name: 'CVV Code' }).fill(cvv);
  }

  async ingresarTarjeta(tarjeta:string) {
    await this.page.waitForLoadState();
    await this.page.getByRole('textbox', { name: 'Enter Credit Card Number' }).fill(tarjeta);
  }

  async submit(){
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.getByRole('button', { name: 'submit' }).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.getByRole('button', { name: 'submit' }).click();
    
  }

  async pagar() {
    await this.page.getByRole('button', { name: 'Pay' }).click();
    await this.page.waitForLoadState('domcontentloaded');
  }
  

  async obtenerOrderId(): Promise<string | undefined> {
    const orderId = await this.page
      .locator('td:has-text("Order ID") + td strong')
      .textContent();
    return orderId ?? undefined;
  }
}