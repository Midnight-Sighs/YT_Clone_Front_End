import React from 'react';
import './Header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

function Header () {
    return ( 
        <div className='container-fluid' id='header-bar'>
            <div className='row container-fluid'>
                <div className="col-3 mt-2 logo"><Logo /></div>
                <div className="col-7 mt-4"><SearchBar /></div>
            </div>
        </div>
     );
}

export default Header ;