import type {BehaviorSubject} from 'rxjs';
import {AppRenderMethodsEnum} from './enums';

export interface UserDetails {
  name: string;
}

export type MaestroWindow = Window &
  typeof globalThis & {
    maestro: {
      apps: {
        [key in AppRenderMethodsEnum]: (containerId: string, location?: any) => void;
      };
      user$?: BehaviorSubject<UserDetails>;
    };
  };
