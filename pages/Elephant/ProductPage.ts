import { expect, Page } from "@playwright/test";

export class ProductPage {
   private precio!: string;
   private cantidad!: string;
  constructor(private page: Page) {}

  

  async capturoDatosTc(newPage: Page) {
   const cardNumberText = await newPage.getByRole('heading', { name: 'Card Number:-' }).textContent();
    const cardMatch = cardNumberText?.match(/\d{16}/);
    if (!cardMatch) throw new Error('No se encontró número de tarjeta');

    const cvvText = await newPage.locator('text=CVV:-').locator('..').textContent();
    const cvvMatch = cvvText?.match(/\d{3}/);
    if (!cvvMatch) throw new Error('No se encontró CVV');

    const fechaText = await newPage.locator('text=Exp:-').locator('..').textContent();
    const fechaMatch = fechaText?.match(/\d{2}\/\d{4}/);
    if (!fechaMatch) throw new Error('No se encontró fecha');

    const [month, year] = fechaMatch[0].split('/');

    const creditLimitText = await newPage.locator('text=Credit Limit $').locator('..').textContent();
    const creditMatch = creditLimitText?.match(/Credit\s*Limit\s*\$\s*(\d+(?:\.\d{2})?)/i);
    if (!creditMatch) throw new Error('No se encontró Credit Limit');

    return {
      tarjeta: cardMatch[0],
      cvv: cvvMatch[0],
      month,
      year,
      creditLimit: creditMatch[1]
    };
  }
  async agregoProductoAlCarrito(){
    //await this.page.getByRole('button', { name: 'Add to cart' }).click();
    //const priceLocator = await this.page.locator('text=Price');
    //await priceLocator.waitFor({ state: 'visible', timeout: 5000 });
    //const priceText = await priceLocator.textContent();
    //const precio = priceText?.match(/\d+/)?.[0] ?? '0';
    //this.precio = precio;
    //this.cantidad = '3';
    await this.page.getByRole('combobox').selectOption({ label: '3' });
    const priceText = await this.page.locator('text=Price').textContent();
    const precio = priceText?.match(/\d+/)?.[0] ?? '0';
    this.precio = precio;
    this.cantidad = '3';
    await this.page.getByRole('combobox').selectOption({ label: '3' });
  }

  async comprar() {
  await this.page.getByRole('button', { name: 'Buy Now' }).click();
  await this.page.waitForLoadState('domcontentloaded');
}

async validarCompra(datos: {tarjeta: string;
                            cvv: string;
                            month: string;
                            year: string;
})  {
  const fila = this.page.locator('table tbody tr');
  await fila.waitFor({ state: 'visible' });

  const tarcaptura = (await fila.locator('td').nth(0).innerText()).trim();
  const totalcaptura = (await fila.locator('td').nth(1).innerText()).trim();
  const mescaptura = (await fila.locator('td').nth(2).innerText()).trim();
  const aniocaptura = (await fila.locator('td').nth(3).innerText()).trim();
  const cvvcaptura = (await fila.locator('td').nth(4).innerText()).trim();
  const orderidcaptura = (await fila.locator('td').nth(5).innerText()).trim();

  expect(tarcaptura).toBe(datos.tarjeta);

  expect(mescaptura.replace(/^0+/, '')).toBe(datos.month.replace(/^0+/, ''));

  expect(aniocaptura).toBe(datos.year);

  expect(cvvcaptura).toBe(datos.cvv);

  // validar que exista orden
  expect(orderidcaptura).not.toBe('');

  // validar total (precio * cantidad)
  const limpiar = (v: string) => parseFloat(v.replace(/[^\d.]/g, ''));

  const totalEsperado = limpiar(this.precio) * parseInt(this.cantidad, 10);

  expect(limpiar(totalcaptura)).toBeCloseTo(totalEsperado, 2);

  console.log('✅ Validación completa exitosa');

}






  }


