import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

//constructor{private page: Page} {} es una forma de declarar e inicializar una propiedad privada llamada "page" en la clase DatosPage. Esto permite que..test
export class DatosPage{
    constructor(private page: Page) {}

    //crear el primer metodo para ir a la pagina de Novus Technology
    async NavegaWeb() {
        await this.page.goto('https://novustechnology.pe/practice-form/');
        waitUntil: 'domcontentloaded'
    }

    //crear el segundo metodo para ingresar los datos personales
    async DatosNombre(nombre: string){
        const input = this.page.getByPlaceholder('Nombre');
        await input.waitFor({state: 'visible'})
        await input.fill(nombre);

    }

    //crear el tercer metodo para ingresar el apellido
    async DatosApellido(apellido: string){
        const input = this.page.getByPlaceholder('Apellido');
        await input.waitFor({state: 'visible'})
        await input.fill(apellido);
    }

    async DatosTelefono(telefono: string){
        const input = this.page.getByPlaceholder('Número de teléfono');
        await input.waitFor({state: 'visible'})
        await input.fill(telefono);
    }

    async DatosCorreo(correo: string){
        const input = this.page.getByPlaceholder('name@example.com');
        await input.waitFor({state: 'visible'})
        await input.fill(correo);
    }

}