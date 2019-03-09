import React from 'react';
import {shallow} from 'enzyme';
import SubTodo from '../components/jsfiles/subTodo';



it('SubTodo Testing', () => {
    let dummyData = {
        title : 'Drink Milk',
        state : false,
        id : 'fsgd45trgf',
        parentKey : 'dsfgfdgre4esfdz',
        prevTodo : {}
    }
    let wrapper = shallow(<SubTodo {...dummyData}/>);
    expect(wrapper).toMatchSnapshot();
})