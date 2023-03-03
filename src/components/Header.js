import React from 'react';
import './Header.css';
import { BiMenu } from 'react-icons/bi';
import Clock from './Clock/Clock';

const Header = () => {
      return (
            <>
                  <div className="Header">
                        <div className='logo-container'>
                              <BiMenu className='menu' />
                              <img src="images/weaths.png" alt="logo" className='logo' />
                        </div>
                        <Clock />
                        <div className='input-container'>
                              <input type='text' className='search-input'></input>
                        </div>
                  </div>
            </>
      );
}

export default Header;