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
 * This means that we cannot create multiple custom elements
 * of the same name, in case we got multiple NG apps,
 * neither we can destroy and re-use due to the API restrictions.
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
 * We generate the app ID as a suffix to the element's name
 * and pass it into Angular's bootstrap method so we can mount
 * on unique custom elements each time
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

  componentDidMount(): void {
    const {name, scripts, host} = APPS_MANIFEST[this.props.app];

    if (!(name || scripts || host)) throw new Error('Missing micro-front script details');

    const customElementId = uuidv4().replace(/-/g, '');

    this.setState({appId: customElementId});

    // If some of the apps scripts can't be found, we append them,
    // otherwise we skip and move on to render the app.
    if (
      !scripts.some(scriptFileName => {
        const scriptId = MicroFrontUtils.createScriptTagId(name, scriptFileName);
        return !!document.getElementById(scriptId);
      })
    ) {
      MicroFrontUtils.appendScriptTags(host!, name, scripts, this.renderMicroFrontend);
      return;
    }
  }

  componentDidUpdate(): void {
    this.renderMicroFrontend();
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
