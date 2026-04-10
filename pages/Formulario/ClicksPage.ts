import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

//constructor{private page: Page} {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase DatosPage. Esto permite que..test
export class ClicksPage{
    constructor(private page: Page) {}

    async Pasatiempo(){
     const checkbox = this.page.getByLabel('Deportes');
     await checkbox.waitFor({state: 'visible'})
     await checkbox.click();   
    }

    async Genero(){
        const radio = this.page.getByLabel('Femenino');
        await radio.waitFor({state: 'visible'})
        await radio.click();
    }
    async CargarDocumento(){
        const fileInput = this.page.locator('#picture');

        await fileInput.setInputFiles({name: 'test.png', mimeType: 'image/png', buffer: Buffer.from('')});
      
    }


}