import { Given, When, Then } from '@cucumber/cucumber';
import { DatosPage } from '../../../pages/Formulario/DatosPage';
import { expect } from '@playwright/test';
import { ClicksPage } from '../../../pages/Formulario/ClicksPage';
import { SelectPage } from '../../../pages/Formulario/SelectPage';
import { ButtonPage } from '../../../pages/Formulario/ButtonPage';

let datosPage: DatosPage;
let clicksPage: ClicksPage;
let selectPage: SelectPage
let buttonPage: ButtonPage

Given('ingreso a la página de Novus Technology', async function () {

  //Inicializamos la pagina con el contexto de Playwright
  datosPage = new DatosPage(this.page);
  clicksPage = new ClicksPage(this.page);
  selectPage = new SelectPage(this.page);
  buttonPage = new ButtonPage(this.page);
  //llamamos al primer metodo de DatosPage para navegar a la pagina
  await datosPage.NavegaWeb();
  });


Given('mis datos personales con el nombre {string} y el apellido {string}', async function (nombre, apellido) {
  //llamamos al segundo metodo
  await datosPage.DatosNombre(nombre);

  //llamamos al tercer metodo
  await datosPage.DatosApellido(apellido);
});


When('ingreso mi correo electrónico {string} y mi número de teléfono {string}', async function (correo, telefono) {
  await datosPage.DatosCorreo(correo);
  await datosPage.DatosTelefono(telefono);
  //colocar pausa para observar el resultado
  await this.page.waitForTimeout(3000);
});

When('selecciono el pasatiempo', async function () {
 await clicksPage.Pasatiempo();
});
When('selecciono el género', async function () {
  await clicksPage.Genero();
});

When('selecciono el lugar departamento {string} y la ciudad {string}', async function (departamento, ciudad) {
  await selectPage.Departamento(departamento);
  await selectPage.Ciudad(ciudad);
});
When('selecciono un comando', async function () {
      await selectPage.Comando();
})
When('cargo un documento', async function () {
    await clicksPage.CargarDocumento();
  });

  Then('visualizo un mensaje con el nombre y el apellido', async function(){
    await buttonPage.EnviarFormulario();
  })