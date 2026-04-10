import {Page , Locator} from '@playwright/test';

export class FormularioPage {
  readonly page: Page;
  readonly nombre: Locator;
  readonly apellido: Locator;
  readonly correoElectronico: Locator;
  readonly genero: Locator;
  readonly numeroTelefono: Locator;
  readonly pasatiempos: Locator;
  readonly departamento: Locator;
  readonly ciudad: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nombre = page.locator('#firstName');
    this.apellido = page.locator('#lastName');
    this.correoElectronico = page.locator('#userEmail');
    this.genero = page.locator('label[for="gender-radio-1"]');
    this.numeroTelefono = page.locator('#userNumber');
    this.pasatiempos = page.locator('label[for="hobbies-checkbox-1"]');
    this.departamento = page.locator('#currentAddress');
    this.ciudad = page.locator('#city');
    this.submitButton = page.locator('#submit');
  }

  async navegar() {
    await this.page.goto('https://novustechnology.pe/practice-form/');
  }

  async llenarFormulario() {
    await this.nombre.fill('Yessica');
    await this.apellido.fill('Huillca Lloclle');
    await this.pasatiempos.click();
    await this.correoElectronico.fill('yhuillcall@gmail.com');
    await this.genero.click();
    await this.numeroTelefono.fill('924835430');
    await this.departamento.fill('LIMA');
    await this.ciudad.fill('LIMA');
  }

  async subirArchivo(ruta: string) {
    await this.page.locator('#picture').setInputFiles(ruta);
  }

  async seleccionarEstadoCiudad() {
    await this.page.locator('text=NCR').click();
    await this.ciudad.click();
    await this.page.locator('text=Delhi').click();
  }

  async enviarFormulario() {
    await this.submitButton.click();
  }
}