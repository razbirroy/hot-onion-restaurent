import React from 'react';
import logo from '../../Images/HeaderTop/logo2.png'
import banner from '../../Images/HeaderTop/bannerbackground.png'
import './HeaderTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';
import duplicateData from '../../duplicateData';
import { useState } from 'react';



const HeaderTop = () => {
  // const fake20 = duplicateData.slice(0, 18);
  //  const [item, setItem] = useState(fake20);
  //  const cartHandel = () =>{
  //     console.log("printed");
  //  }
    return (
      <div>
        <div className="Main">
             <div className="left-side">
                 <img src={logo} alt=""/>
             </div>
             <div className="right-side">
               <h7> <FontAwesomeIcon className="shopping-cart" icon={faCartPlus}/> </h7>
                 <button className="for-login">Login</button>
                 <button className="for-signUp">Sign Up</button>
             </div>
             <div className="single-banner">
                <img src={banner} alt=""/>
             </div>
        </div>
        <div>
            {
              
            }
        </div>
     </div> 
    );
};

export default HeaderTop;