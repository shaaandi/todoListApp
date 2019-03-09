import React from 'react';
import {shallow} from 'enzyme';
import Form from '../components/jsfiles/form';

let wrapper = shallow(<Form addTodo={() => {}}/>);

describe('Form Testing ', () => {
    it('Form SnapShot Testing', () => {
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
        expect(wrapper.state()).toEqual({title: value, flag : 'white' })
        wrapper.instance().submitHandler(event)
        expect(wrapper.state()).toEqual({title: '', flag : 'white' })
        
    })
})