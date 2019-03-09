import React from 'react';
import {shallow} from 'enzyme';
import SubForm from '../components/jsfiles/subForm';

let wrapper = shallow(<SubForm addSubTodo={() => {}}/>);

describe('SubForm Testing ', () => {
    it('SubForm SnapShot Testing', () => {
        expect(wrapper).toMatchSnapshot();
    })


    it('Testing the Submit Handler and Change Handler', () => {
        let value = 'Drink Coffee'
        let title = 'title'
        let event = {
            target : {
               value  : value ,
               name : title
            },
            preventDefault : () => {}
        }
        wrapper.instance().changeHandler(event)
        expect(wrapper.state()).toEqual({title: value })
        wrapper.instance().submitHandler(event)
        expect(wrapper.state()).toEqual({title: '' })
        
    })
})