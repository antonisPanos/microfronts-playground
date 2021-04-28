import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Main from '../Main';

describe('Main', () => {
  it('should render correctly', () => {
    const mainComp: ShallowWrapper = shallow(<Main />);

    expect(mainComp.debug()).toMatchSnapshot();
  });
});
