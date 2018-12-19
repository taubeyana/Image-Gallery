import React from 'react';
import './Header.css';
import Search from '../../common/Search/Search'
import  logo  from '../../logo.png';

const Header = () => {
    return (
        <div className = 'header'>
        <div className = 'logo-wrapper'> 
            <img src = { logo } alt= 'logo' className = 'logo' />
            <div className = 'text-wrapper'> 
                <h1> Image Gallery </h1>
            </div>
        </div>
        <Search/>
        </div>)
    }
    
export default Header;