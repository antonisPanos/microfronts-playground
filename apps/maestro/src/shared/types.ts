import {AppTypeEnum} from './enums';
import {AppRenderMethodsEnum} from '../../../../libs/models/enums';

export interface AppConfig {
  name: string;
  scripts: string[];
  host: string | undefined;
  type: AppTypeEnum;
  mountMethodName: AppRenderMethodsEnum;
  unmountMethodName: AppRenderMethodsEnum;
}
