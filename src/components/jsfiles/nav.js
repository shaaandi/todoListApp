import React from 'react';
import {FaJenkins, FaUserAlt, } from 'react-icons/fa'
import {IoIosSettings} from 'react-icons/io'
import '../cssfiles/navBar.css';

const NavBar = () => {
        return (
            <div id='navBar'>
                <div id='navLeftBar'>
                    <div className='navBrandIcon'>
                        <FaJenkins size={23}/>
                    </div>
                    <div id='navBrandName'>
                        Schedular
                    </div>
                </div>
                <div id='navRightBar'>
                    <button className='navButton'><FaUserAlt size={17} color={'white'}/></button>
                    <button className='navButton'><IoIosSettings size={17} color={'white'}/></button>
                </div>
            </div>
        )
}

export default NavBar;
