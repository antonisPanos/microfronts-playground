import type {MaestroWindow} from '../models/types';

export class MaestroWindowService {
  static initMaestroNamespace = () => {
    if (MaestroWindowService.maestroNamespaceExists()) return;

    (window as MaestroWindow).maestro = {
      // @ts-expect-error - Properties will be implemented on runtime
      apps: {}
    };
  };

  static maestroNamespaceExists = (): boolean => !!(window as MaestroWindow).maestro;
}
