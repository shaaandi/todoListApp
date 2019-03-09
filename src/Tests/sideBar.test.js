import React from 'react';
import {shallow} from 'enzyme';
import SideBar from '../components/jsfiles/sidebar';




describe('SideBar Testing Suite', () => {
    it('SideBar Testing with Prev as True', () => {
        let prevTodo = {
            title: '',
            state: false,
            steps: [],
            flag: 'white',
            id: 'vsdfgdfkm2432rewfm'
        }
        let prev = true;
        let wrapperWithPrevTrue = shallow(<SideBar prev={prev} prevTodo={prevTodo}/>);
        expect(wrapperWithPrevTrue).toMatchSnapshot();
    })

    it('SideBar Testing with Prev as False', () => {
        let prevTodo = {}
        let prev = false;
        let wrapperWithPrevFalse = shallow(<SideBar prev={prev} prevTodo={prevTodo}/>);
        expect(wrapperWithPrevFalse).toMatchSnapshot();
    })

    
})