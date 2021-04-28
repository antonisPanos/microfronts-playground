import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import RouteInfo from '../RouteInfo';

describe('RouteInfo', () => {
  it('should render correctly', () => {
    const mainComp: ShallowWrapper = shallow(<RouteInfo />);

    expect(mainComp.debug()).toMatchSnapshot();
  });
});
