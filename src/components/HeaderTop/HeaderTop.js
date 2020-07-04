import React from 'react';
import logo from '../../Images/HeaderTop/logo2.png'
import banner from '../../Images/HeaderTop/bannerbackground.png'
import './HeaderTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';
import duplicateData from '../../duplicateData';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';



const HeaderTop = (props) => {
  console.log(props.store)
 
//  useEffect(()=>{
//     console.log("renders")
//  },[props.store.length]);
  // const [add, setAdd] = useState([])
  
  //   useEffect(()=>{
  //     const bringData = getDatabaseCart();
  //     const itemName = Object.keys(bringData);
  //     const previousCart = itemName.map(exist => {
  //         const item = duplicateData.find(pd => pd.name === exist);
  //         return item;
  //     },)
  //        console.log(previousCart);
  //         setAdd(previousCart);
  //   }, [])
  //   const cartHandle = () =>{
  //       console.log("clicked")
  //   }
    return (
      <div>
        <div className="Main">
             <div className="left-side">
                 <img src={logo} alt=""/>
             </div>
             <div className="right-side">
               <h7> {props.store.length}<FontAwesomeIcon className="shopping-cart" icon={faCartPlus}/> </h7>
                 <button className="for-login">Login</button>
                 <button className="for-signUp">Sign Up</button>
             </div>
             <div className="single-banner">
                <img src={banner} alt=""/>
             </div>
        </div>
        <div>
          
        </div>
     </div> 
    );
};

export default HeaderTop;