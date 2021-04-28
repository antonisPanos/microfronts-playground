import {BehaviorSubject} from 'rxjs';
import type {MaestroWindow} from '../models/types';

export class GlobalStoreService {
  static initStores = () => {
    GlobalStoreService.initUser();
  };

  private static initUser = () => {
    if (GlobalStoreService.hasUser()) return;

    (window as MaestroWindow).maestro.user$ = new BehaviorSubject({name: 'Doctor Strange'});
  };

  private static hasUser = (): boolean => !!(window as MaestroWindow).maestro?.user$;
}
