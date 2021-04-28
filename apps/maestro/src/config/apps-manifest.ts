import {AppsEnum, AppTypeEnum} from '../shared/enums';
import {AppConfig} from '../shared/types';
import {AppRenderMethodsEnum} from '../../../../libs/models/enums';

const {REACT_APP_HOST, NG_APP_HOST} = process.env;

export const APPS_MANIFEST: Record<AppsEnum, AppConfig> = {
  [AppsEnum.REACT_APP]: {
    name: 'reactApp',
    scripts: ['main.js'],
    host: REACT_APP_HOST,
    type: AppTypeEnum.REACT,
    mountMethodName: AppRenderMethodsEnum.REACT_APP_MOUNT_METHOD,
    unmountMethodName: AppRenderMethodsEnum.REACT_APP_UNMOUNT_METHOD
  },
  [AppsEnum.NG_APP]: {
    name: 'ngApp',
    scripts: ['runtime.js', 'polyfills.js', 'vendor.js', 'main.js'],
    host: NG_APP_HOST,
    type: AppTypeEnum.ANGULAR,
    mountMethodName: AppRenderMethodsEnum.NG_APP_MOUNT_METHOD,
    unmountMethodName: AppRenderMethodsEnum.NG_APP_UNMOUNT_METHOD
  }
};
