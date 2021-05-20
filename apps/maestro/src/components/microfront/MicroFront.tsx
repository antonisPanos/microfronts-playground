import React, {DOMElement} from 'react';
import type {MaestroWindow} from '../../../../../libs/models/types';
import type {WindowLocation} from '@reach/router';
import {APPS_MANIFEST} from '../../config/apps-manifest';
import {AppsEnum} from '../../shared/enums';
import {MicroFrontUtils} from './MicroFrontUtils';
import {hot} from 'react-hot-loader';
import {v4 as uuidv4} from 'uuid';

/**
 * Angular require custom elements to bootstrap.
 * Note that custom elements must be defined in the
 * CustomElementRegistry but cannot be removed afterwards.
 * neither we can destroy and re-use due to the API restrictions.
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
 */
const NgCustomElement = ({appId}: {appId: string}): DOMElement<any, any> =>
  React.createElement(`${MicroFrontUtils.NG_CUSTOM_ELEMENT_PREFIX}${appId}`, null, null);

class MicroFront extends React.Component<{
  app: AppsEnum;
  location: WindowLocation;
}> {
  state = {
    appId: ''
  };

  constructor(props: {app: AppsEnum; location: WindowLocation}) {
    super(props);
    const customElementId = uuidv4().replace(/-/g, '');
    this.state = {appId: customElementId};
  }

  componentDidMount(): void {
    const {name, scripts, host, styles} = APPS_MANIFEST[this.props.app];

    if (!(name || scripts || host)) throw new Error('Missing micro-front script details');

    if (
      !scripts.some(scriptFileName => {
        const scriptId = MicroFrontUtils.createTagId(
          name,
          scriptFileName,
          MicroFrontUtils.SCRIPT_PREFIX
        );
        return !!document.getElementById(scriptId);
      })
    ) {
      MicroFrontUtils.appendStyleTags(host!, name, styles);
      MicroFrontUtils.appendScriptTags(host!, name, scripts, this.renderMicroFrontend);
    } else {
      this.renderMicroFrontend();
    }
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  componentWillUnmount(): void {
    const {unmountMethodName} = APPS_MANIFEST[this.props.app];
    const container = `${MicroFrontUtils.CONTAINER_PREFIX}${this.state.appId}`;

    try {
      (window as MaestroWindow).maestro!.apps[unmountMethodName](container);
    } catch (e) {
      console.error('Failed to unmount component', e);
    }
  }

  renderMicroFrontend = (): void => {
    const {mountMethodName, type} = APPS_MANIFEST[this.props.app];
    const container = MicroFrontUtils.createContainerId(type, this.state.appId);

    // It is possible that the micro-front has not yet registered the bootstrap function
    if (!(window as MaestroWindow).maestro?.apps[mountMethodName]) return;

    try {
      (window as MaestroWindow).maestro!.apps[mountMethodName](container, this.props.location);
    } catch (e) {
      console.error('Failed to mount component', e);
    }
  };

  render() {
    return (
      <div>
        {this.props.app === AppsEnum.REACT_APP && (
          <main id={`${MicroFrontUtils.CONTAINER_PREFIX}${this.state.appId}`} />
        )}
        {this.props.app === AppsEnum.NG_APP && <NgCustomElement appId={this.state.appId} />}
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(MicroFront);
