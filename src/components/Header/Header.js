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
                <h1> venn </h1>
                <span> Image Gallery </span>
            </div>
        </div>
        <Search/>
        </div>)
    }
    
export default Header;