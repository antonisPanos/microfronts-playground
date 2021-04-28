import React from 'react';
import {render} from 'react-dom';
import Main from './components/main/Main';
import {MaestroWindowService} from '../../../libs/services/MaestroWindowService';
import {GlobalStoreService} from '../../../libs/services/GlobalStoreService';

MaestroWindowService.initMaestroNamespace();
GlobalStoreService.initStores();

render(React.createElement(Main), document.getElementById('root'));
