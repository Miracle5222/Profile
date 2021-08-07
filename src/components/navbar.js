
import React from 'react'
import { Link, } from "react-router-dom";
import './nav-style.scss';
import Button from './button';

const Navbar = () => {
    return (

        <div className='container'>
            <div className='container__logo'>
                <h1>Noblesse</h1>
            </div>
            <div className='container__menu'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Resourcess</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </div>
            <Button />
        </div>

    )
}


export default Navbar;
