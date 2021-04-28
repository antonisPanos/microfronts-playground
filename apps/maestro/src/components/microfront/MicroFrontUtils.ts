import {AppTypeEnum} from '../../shared/enums';

export class MicroFrontUtils {
  static readonly CONTAINER_PREFIX = 'container-';
  static readonly NG_CUSTOM_ELEMENT_PREFIX = 'ng-app-';
  static readonly SCRIPT_PREFIX = 'micro-front-script-';

  static appendScriptTags = (
    host: string,
    appName: string,
    scripts: string[],
    onLoadCb: () => void
  ): void =>
    scripts.forEach(scriptFileName => {
      const script = document.createElement('script');
      script.id = MicroFrontUtils.createScriptTagId(appName, scriptFileName);
      script.crossOrigin = '';
      script.defer = true;
      script.src = `${host}/${scriptFileName}`;
      script.onload = onLoadCb;

      document.body.appendChild(script);
    });

  static createScriptTagId = (
    appName: string,
    scriptName: string,
    scriptPrefix: string = MicroFrontUtils.SCRIPT_PREFIX
  ): string => `${scriptPrefix}${appName}-${scriptName}`;

  static createContainerId = (type: AppTypeEnum, appId: string): string =>
    AppTypeEnum.ANGULAR === type
      ? `${MicroFrontUtils.NG_CUSTOM_ELEMENT_PREFIX}${appId}`
      : `${MicroFrontUtils.CONTAINER_PREFIX}${appId}`;
}
