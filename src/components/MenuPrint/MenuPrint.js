import React from 'react';
import './MenuPrint.css'
import { Link } from 'react-router-dom';


const MenuPrint = (props) => {
  console.log(props.product.id)
  const {name, des, price, img } =  props.product
    return (
      
        <div className="Card menu-style col-sm-4">
            <Link className="all-style" to={"/ItemName/" + name}>
                  <img src={img} alt=""/>
                <div>
                    <h6>{name}</h6>
                    <p>{des}</p>
                   <h4>${price}</h4>
                </div> 
            </Link>  
         </div>
            
     
  );
};

export default MenuPrint;