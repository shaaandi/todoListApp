import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../components/jsfiles/nav';

let wrapper = shallow(<NavBar/>);

it('NavBar Testing', () => {
    expect(wrapper).toMatchSnapshot();
})