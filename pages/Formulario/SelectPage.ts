import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

//constructor{private page: Page} {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase DatosPage. Esto permite que..test
export class SelectPage{
    constructor(private page: Page) {}

   async Departamento(departamento: string){
    const select = this.page.locator('#department');
    await select.waitFor({state: 'visible'})
    await select.selectOption({label: departamento});
   } 
   async Ciudad(ciudad: string){
    const select = this.page.locator('#city');
    await select.waitFor({state: 'visible'})
    await select.selectOption({label: ciudad});
   }
   async Comando(){
    const select = this.page.locator('#commands');
    await select.waitFor({state:'visible'})
    await select.selectOption({label: 'Navigation Commands'});
   }
}
