
import React from 'react'
import { Link, } from "react-router-dom";
import './nav-style.scss';
import Button from './button';
import SocialMedia from './socialMedia';
const Navbar = () => {

    function handleClick() {
        document.getElementById('con').style.width = '-200px';
    }
    return (

        <div>

            <div className={`container `} id='con'>
                <div className='container__logo'>
                    <h1>Noblesse</h1>
                </div>
                <div className='container__menu'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </div>
                <Button />

                <button className='container__menu-item' onclick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

        </div>

    )
}


export default Navbar;
