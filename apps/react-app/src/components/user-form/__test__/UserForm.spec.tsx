import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {UserForm} from '../UserForm';

describe('RouteInfo', () => {
  it('should render correctly', () => {
    const mainComp: ShallowWrapper = shallow(<UserForm />);

    expect(mainComp.debug()).toMatchSnapshot();
  });
});
