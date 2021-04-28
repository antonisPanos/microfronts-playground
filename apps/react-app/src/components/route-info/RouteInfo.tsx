import React, {Fragment, FunctionComponent, ReactElement} from 'react';
import {hot} from 'react-hot-loader';
import type {RouteComponentProps, WindowLocation} from '@reach/router';

export const RouteInfo: FunctionComponent<RouteComponentProps<{location: WindowLocation}>> = ({
  location
}): ReactElement => {
  return (
    <Fragment>
      <h3>ReactApp Child</h3>
      <hr />
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </Fragment>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(RouteInfo);
