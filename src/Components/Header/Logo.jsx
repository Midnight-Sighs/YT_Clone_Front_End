import logo from '../../Images/LogoPlaceholder.png'
import React from 'react';
import './Header.css'

function Logo() {
    return ( 
        <div>
            <img className="logo" src={logo}></img>
        </div>
     );
}

export default Logo;