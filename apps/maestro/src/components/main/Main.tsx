import React, {Fragment, FunctionComponent, ReactElement, StrictMode} from 'react';
import {hot} from 'react-hot-loader';
import {
  createHistory,
  History,
  LocationProvider,
  RouteComponentProps,
  Router,
  WindowLocation
} from '@reach/router';
import MicroFront from '../microfront/MicroFront';
import UserDetails from '../user-details/UserDetails';
import {createHashSource} from 'reach-router-hash-history';
import {AppsEnum} from '../../shared/enums';

const Main: FunctionComponent = (): ReactElement => {
  const history: History = createHistory(createHashSource());

  const ReactApp: FunctionComponent<RouteComponentProps<{location: WindowLocation}>> = ({
    location
  }) => <MicroFront app={AppsEnum.REACT_APP} location={location!} />;

  const NgApp: FunctionComponent<RouteComponentProps<{location: WindowLocation}>> = ({
    location
  }) => <MicroFront app={AppsEnum.NG_APP} location={location!} />;

  return (
    <StrictMode>
      <Fragment>
        <div style={{backgroundColor: '#f7f3e9', padding: '10px', borderRadius: '10px'}}>
          <section>
            <h2>Maestro</h2>
            <UserDetails />
            <hr />
            <h2>Navigate</h2>
            <ul>
              <li>
                <a href="#/home">
                  <strong>/home</strong> - (ReactApp)
                </a>
              </li>
              <li>
                <a href="#/user-form">
                  <strong>/user-form</strong> - (ReactApp)
                </a>
              </li>
              <li>
                <a href="#/ng">
                  <strong>/ng</strong> - (NgApp - Home)
                </a>
              </li>
              <li>
                <a href="#/ng-route-info">
                  <strong>/ng-route-info</strong> - (NG App)
                </a>
              </li>
              <li>
                <a href="#/ng-user-form">
                  <strong>/ng-user-form</strong> - (NG App)
                </a>
              </li>
              <li>
                <a href="#/ng-subdomain/ng-route-info">
                  <strong>/ng-subdomain/ng-route-info</strong> - (NG App)
                </a>
              </li>
            </ul>
          </section>
          <hr />
          <section>
            <h2>Router outlet</h2>
            <div
              style={{
                border: '1px dashed black',
                borderRadius: '10px',
                backgroundColor: '#d5ecc2'
              }}
            >
              <LocationProvider history={history}>
                {context => (
                  <Fragment>
                    <Router location={context.location}>
                      <ReactApp location={context.location} path="/home" />
                      <ReactApp location={context.location} path="/user-form" />
                      <NgApp location={context.location} path="/ng" />
                      <NgApp location={context.location} path="/ng-route-info" />
                      <NgApp location={context.location} path="/ng-user-form" />
                      <NgApp location={context.location} path="/ng-subdomain/ng-route-info" />
                    </Router>
                  </Fragment>
                )}
              </LocationProvider>
            </div>
          </section>
        </div>
      </Fragment>
    </StrictMode>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(Main);
