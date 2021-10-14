import logo from '../../Images/LogoPlaceholder.png'
import React from 'react';
import './Header.css'

function Logo() {
    return ( 
        <div className='logo'>
            <img src={logo}></img>
        </div>
     );
}

export default Logo;