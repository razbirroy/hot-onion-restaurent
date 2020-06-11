import React from 'react';
import './MenuPrint.css'
import { Link } from 'react-router-dom';


const MenuPrint = (props) => {
  const {name, des, price, img} =  props.product
    return (
        <div className="Card menu-style col-sm-4">
               <img src={img} alt=""/>
              <div>
                 <h6><Link to="/">{name} </Link> </h6>
                 <p>{des}</p>
                 <h4>${price}</h4>
              </div> 
             
           </div>   
     
  );
};

export default MenuPrint;