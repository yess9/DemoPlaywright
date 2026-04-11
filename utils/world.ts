import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page,BrowserContext, chromium,  } from '@playwright/test';


//explicar para que sirve el world constructor y como se usa en los steps y hooks
// En este caso, el CustomWorld se encarga de inicializar el navegador y la página de Playwright, lo que permite que los pasos y hooks puedan acceder a ellos a través de "this".
// En los hooks, se llama a "this.init()" para iniciar el navegador antes de cada escenario y "this.close()" para cerrarlo después de cada escenario. En los pasos, se puede acceder a "this.page" para interactuar con la página web durante las pruebas.
   


export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  tarjeta?: string;
  cvv?: string;
  month?: string;
  year?: string;
  creditLimit?: string;
  precio?: string;
  cantidad?: string;
  orderId?: string;

  async init() {
    this.browser = await chromium.launch({
      headless: true,
      slowMo: 200, // opcional para debug
      args: ['--disable-dev-shm-usage'] // Trabaja el tiempo de espera para evitar errores de memoria en contenedores o entornos limitados
    });

    this.context = await this.browser.newContext(); // 👈 CREA UN NUEVO CONTEXTO
    this.page = await this.context.newPage();
  }

  async close() {
    await this.page.close();       // 👈 cerrar en orden
    await this.context.close();    // 👈 CLAVE
    await this.browser.close();    // 👈 final
  }
}

setWorldConstructor(CustomWorld);