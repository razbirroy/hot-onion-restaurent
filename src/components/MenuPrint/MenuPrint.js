import React from 'react';
import './MenuPrint.css'

const MenuPrint = (props) => {
    const {name, des, price, img} =  props.product
    return (
       
          <div className="Card menu-style col-sm-4">
                 <img src={img} alt=""/>
              <div>
                 <h6>{name}</h6>
                 <p>{des}</p>
                 <h4>${price}</h4>
              </div>   
           </div>   
  );
};

export default MenuPrint;