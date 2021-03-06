import React from 'react';
import logo from "../../logo.svg";
import "./navbar.scss"
const Navbar = () => {
    return ( 


        <div>

             <nav className="navbar">
                <img src={logo} alt="city tours company"/>

                <ul className="nav-links">

                    <li><a href="/" className="nav-link">home</a></li>
                    <li><a href="/" className="nav-link">about</a></li>
                    <li><a href="/" className="nav-link active">tours</a></li>
                </ul>
             </nav>
        </div>
     );
}
 
export default Navbar;