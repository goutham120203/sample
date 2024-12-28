import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="navbar">
            <ul className="nav-list">
               <Link to="/"> <li>Home</li> </Link>
               <Link to="/dashboard"> <li>Dashboard</li> </Link>
               <Link to="/about"> <li>About</li> </Link>
            </ul>
        </div>
    );
};

export default NavBar;