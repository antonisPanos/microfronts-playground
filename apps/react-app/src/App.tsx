import Main from './components/main/Main';
import React from 'react';
import type {MaestroWindow} from '../../../libs/models/types';
import type {WindowLocation} from '@reach/router';
import {render, unmountComponentAtNode} from 'react-dom';

(window as MaestroWindow).maestro.apps.mountReactApp = (
  containerId: string,
  location: WindowLocation
): void => render(<Main location={location} />, document.getElementById(containerId));

(window as MaestroWindow).maestro.apps.unmountReactApp = (containerId: string): void => {
  const ele = document.getElementById(containerId);

  if (!ele) {
    throw new Error(`Cannot umount element with container ID: ${containerId}`);
  }

  unmountComponentAtNode(ele);
};

try {
  render(React.createElement(Main), document.getElementById('react-app-root'));
} catch (e) {}
