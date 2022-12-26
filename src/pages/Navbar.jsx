import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Nav">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/Students">Students</NavLink>
            <NavLink to="/ContactUs">Contact Us</NavLink>

        </div>
    );
}

export default Navbar;