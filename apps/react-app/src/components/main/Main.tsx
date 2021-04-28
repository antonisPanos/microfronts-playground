import React, {Fragment, FunctionComponent, ReactElement, StrictMode} from 'react';
import {hot} from 'react-hot-loader';
import {Router, WindowLocation} from '@reach/router';
import {UserForm} from '../user-form/UserForm';
import {RouteInfo} from '../route-info/RouteInfo';

const Main: FunctionComponent<{location?: WindowLocation}> = ({
  location = window.location
} = {}): ReactElement => {
  return (
    <StrictMode>
      <Fragment>
        <div style={{padding: '10px', borderRadius: '10px'}}>
          <h1>ReactApp</h1>
          <section>
            <h2>Router outlet</h2>
            <div style={{border: '1px dashed black', padding: '10px', borderRadius: '10px'}}>
              <Router location={location as WindowLocation}>
                <RouteInfo location={location as WindowLocation} path="/home" />
                <UserForm location={location as WindowLocation} path="/user-form" />
              </Router>
            </div>
          </section>
        </div>
      </Fragment>
    </StrictMode>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(Main);
