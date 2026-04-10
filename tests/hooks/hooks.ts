import { Before, After } from '@cucumber/cucumber';
import '../../utils/world'; // Asegúrate de que el CustomWorld se registre correctamente
import { CustomWorld } from '../../utils/world';

// hooks.ts — ejecuta PRIMERO
Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  try {
    await this.close();
  } catch (e) {}
});
