import React from 'react';
import logo from '../../Images/HeaderTop/logo2.png'
import banner from '../../Images/HeaderTop/bannerbackground.png'
import './HeaderTop.css'

const HeaderTop = () => {
    return (
        <div className="Main">
             <div className="left-side">
                 <img src={logo} alt=""/>
             </div>
             <div className="right-side">
                 <button className="for-login">Login</button>
                 <button className="for-signUp">Sign Up</button>
             </div>
             <div className="single-banner">
                <img src={banner} alt=""/>
             </div>
        </div>
    );
};

export default HeaderTop;