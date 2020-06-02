import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="main-navbar">
             <a href="/breakfast">Breakfast</a>
             <a href="/lunch">Lunch</a>
             <a href="dinner">Dinner</a>
        </div>
    );
};

export default NavBar;