import React from 'react'
import './navbar.scss';



function Navbar() {
  

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <a href='#'>RGB</a>
            </div>
            <div className='navbar__links'>
                <ul>
                    <li><a href='#'>PROFILE</a></li>
                    <li><a href='#'>PORTFOLIO</a></li>
                    <li><a href='#'>RESOURCESS</a></li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>ABOUT</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;
