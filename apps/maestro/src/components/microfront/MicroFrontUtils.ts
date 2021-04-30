import {AppTypeEnum} from '../../shared/enums';

export class MicroFrontUtils {
  static readonly CONTAINER_PREFIX = 'container-';
  static readonly NG_CUSTOM_ELEMENT_PREFIX = 'ng-app-';
  static readonly SCRIPT_PREFIX = 'micro-front-script-';
  static readonly STYLE_PREFIX = 'micro-front-style-';

  static appendStyleTags = (host: string, appName: string, styles: string[]): void =>
    styles.forEach(styleFileName => {
      const style = document.createElement('link');
      style.id = MicroFrontUtils.createTagId(appName, styleFileName, MicroFrontUtils.STYLE_PREFIX);
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.href = `${host}/${styleFileName}`;

      document.head.appendChild(style);
    });

  static appendScriptTags = (
    host: string,
    appName: string,
    scripts: string[],
    onLoadCb: () => void
  ): void =>
    scripts.forEach(scriptFileName => {
      const script = document.createElement('script');
      script.id = MicroFrontUtils.createTagId(
        appName,
        scriptFileName,
        MicroFrontUtils.SCRIPT_PREFIX
      );
      script.crossOrigin = '';
      script.defer = true;
      script.src = `${host}/${scriptFileName}`;
      script.onload = onLoadCb;

      document.body.appendChild(script);
    });

  static createTagId = (appName: string, fileName: string, prefix: string): string =>
    `${prefix}${appName}-${fileName}`;

  static createContainerId = (type: AppTypeEnum, appId: string): string =>
    AppTypeEnum.ANGULAR === type
      ? `${MicroFrontUtils.NG_CUSTOM_ELEMENT_PREFIX}${appId}`
      : `${MicroFrontUtils.CONTAINER_PREFIX}${appId}`;
}
