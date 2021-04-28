import {enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {MaestroWindow} from '../../../libs/models/types';

if (environment.production) {
  enableProdMode();
}

export let appContainer = 'app-root';

(window as MaestroWindow).maestro.apps.mountNgApp = (
  container: string
): Promise<NgModuleRef<AppModule> | void> => {
  if (container === appContainer) return;

  appContainer = container;

  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
};

(window as MaestroWindow).maestro.apps.unmountNgApp = () => {
  try {
    platformBrowserDynamic().destroy();
  } catch (e) {}
};

// TODO: Conditionally trigger the default bootstrap for standalone development
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
