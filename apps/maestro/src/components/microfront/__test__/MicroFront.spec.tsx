import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import MicroFront from '../MicroFront';
import {AppsEnum} from '../../../shared/enums';
import {WindowLocation} from '@reach/router';

describe('UserDetails', () => {
  it('should render correctly', () => {
    const mainComp: ShallowWrapper = shallow(
      <MicroFront app={AppsEnum.REACT_APP} location={(undefined as unknown) as WindowLocation} />
    );

    expect(mainComp.debug()).toBeTruthy();
  });
});
