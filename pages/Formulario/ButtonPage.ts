import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

//constructor{private page: Page} {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase DatosPage. Esto permite que..test
export class ButtonPage{
    constructor(private page: Page) {}
 async EnviarFormulario(){
    const button = this.page.getByRole('button',{name: 'Enviar'});
    await button.click();
 }

}