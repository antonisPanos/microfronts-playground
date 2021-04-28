import React, {Fragment, FunctionComponent, ReactElement} from 'react';
import type {MaestroWindow, UserDetails} from '../../../../../libs/models/types';
import type {BehaviorSubject} from 'rxjs';
import type {RouteComponentProps} from '@reach/router';
import {hot} from 'react-hot-loader';

export const UserForm: FunctionComponent<RouteComponentProps<unknown>> = (): ReactElement => {
  const user$ = React.useRef<BehaviorSubject<UserDetails> | undefined>(
    (window as MaestroWindow).maestro?.user$
  );
  const [user, setUser] = React.useState<UserDetails>({name: ''});

  React.useEffect(() => {
    const subscription = user$.current?.subscribe(value => {
      setUser(value);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [user$.current?.getValue()]);

  return (
    <Fragment>
      <h3>User</h3>
      <input
        type={'text'}
        value={user?.name}
        onChange={({target}) => user$?.current?.next({name: target.value})}
      />
    </Fragment>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(UserForm);
