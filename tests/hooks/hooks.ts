import { Before, After } from '@cucumber/cucumber';
import '../../utils/world'; // Asegúrate de que el CustomWorld se registre correctamente
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 segundos

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});
