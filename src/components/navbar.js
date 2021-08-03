
import React from 'react'
import {

    Link,

} from "react-router-dom";
import './nav-style.css';


const Navbar = () => {

    return (

        <div>
         
           <nav >
                <ul className='navigation'>
                    <li >
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/Services'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/Services'>Resources</Link>
                    </li>
                </ul>
            </nav>
         
        </div>

    )
}


export default Navbar;
