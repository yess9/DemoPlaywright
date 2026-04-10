import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber';
import { expect, type Page } from '@playwright/test';
import { CustomWorld } from '../../../utils/world';
import { HomePage } from '../../../pages/Elephant/HomePage';
import { ProductPage } from '../../../pages/Elephant/ProductPage';
import { CheckoutPage } from '../../../pages/Elephant/CheckoutPage';

setDefaultTimeout(60000);

let home: HomePage;
let productPage: ProductPage; 
let checkoutPage: CheckoutPage;
let popupPage: Page;

Given('ingreso a la página de Elephant', async function (this: CustomWorld) {
   home = new HomePage(this.page);
   productPage = new ProductPage(this.page);
   checkoutPage = new CheckoutPage(this.page);
 

  await home.navigaHomePage();

});


When('se abre y se cierra el pop-up de cookies', async function (this: CustomWorld) {
   popupPage = await home.abrirPopupTarjeta();

});


When('capturo los datos de la tarjeta', async function (this: CustomWorld) {
  const datos = await productPage.capturoDatosTc(popupPage);

  this.tarjeta = datos.tarjeta;
  this.cvv = datos.cvv;
  this.month = datos.month;
  this.year = datos.year;
});

When('regreso al home', async function (this: CustomWorld) {
  await popupPage.close();
  await this.page.bringToFront();
});

When('agrego un producto al carrito de compras', async function (this: CustomWorld) {
  await productPage.agregoProductoAlCarrito();
  const priceText = await this.page.locator('text=Price').textContent();

});

When('doy click en comprar', async function (this: CustomWorld) {
  await productPage.comprar();
});

When('ingreso los datos de la tarjeta', async function (this: CustomWorld) {
    await checkoutPage.ingresarNumeroTarjeta(this.tarjeta!);
    await checkoutPage.ingresarMes(this.month!);
    await checkoutPage.ingresarAnio(this.year!);
    await checkoutPage.ingresarCVV(this.cvv!);
});

When('visualizo un mensaje de compra exitosa y numero de orden', async function (this: CustomWorld) {
    await checkoutPage.pagar();
});

When('regreso al home de Elephant', async function (this: CustomWorld) {
  await home.retornaHome();
});
When('doy click en estado de compra', async function (this: CustomWorld) {
   await home.irEstadoCompra();
});

When('ingreso los datos de  la tarjeta para comprar', async function (this: CustomWorld) {
  await checkoutPage.ingresarTarjeta(this.tarjeta!);
  await checkoutPage.submit();
});



Then('puedo validar los datos de la tarjeta y el estado de la compra', async function (this: CustomWorld) {
  //const orderId = await checkoutPage.obtenerOrderId();
  //expect(orderId).toBeDefined();
  //console.log('Order ID:', orderId);

  await productPage.validarCompra({ tarjeta: this.tarjeta!, cvv: this.cvv!, month: this.month!, year: this.year! });
});
