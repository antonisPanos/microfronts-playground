import React, {FunctionComponent, ReactElement} from 'react';
import {hot} from 'react-hot-loader';
import type {MaestroWindow} from '../../../../../libs/models/types';

export const UserDetails: FunctionComponent<unknown> = (): ReactElement => {
  const user$ = React.useRef((window as MaestroWindow).maestro?.user$);
  const [user, setUser] = React.useState({name: ''});

  React.useEffect(() => {
    if (!user$?.current) return;

    const subscription = user$.current.subscribe(value => {
      setUser(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [user$.current]);

  return <h3>User: {user?.name}</h3>;
};

declare let module: Record<string, unknown>;

export default hot(module)(UserDetails);
