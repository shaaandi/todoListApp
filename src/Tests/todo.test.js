import React from 'react';
import {shallow} from 'enzyme';
import Todo from '../components/jsfiles/todo';



it('NavBar Testing', () => {
    let todo = {
                title : 'Drink Milk',
                state : false,
                steps : [],
                flag : 'white',
                viewSideBar : () => {},
                id : 'fgdgd32wersd'
    }
    let wrapper = shallow(<Todo {...todo}/>);
    expect(wrapper).toMatchSnapshot();
})