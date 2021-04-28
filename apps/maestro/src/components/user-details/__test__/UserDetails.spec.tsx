import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {UserDetails} from '../UserDetails';

describe('UserDetails', () => {
  it('should render correctly', () => {
    const mainComp: ShallowWrapper = shallow(<UserDetails />);

    expect(mainComp.debug()).toMatchSnapshot();
  });
});
