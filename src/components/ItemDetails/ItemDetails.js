import React from 'react';
import { useParams } from 'react-router-dom';
import duplicateData from '../../duplicateData';
import { useState } from 'react';
import { useEffect } from 'react';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import './ItemDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ItemDetails = () => {
    const {productName} = useParams();
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);
    const [add, setAdd] = useState([])
   
    useEffect(()=>{
      const bringData = getDatabaseCart();
      const itemName = Object.keys(bringData);
      const previousCart = itemName.map(exist => {
          const item = duplicateData.filter(pd => pd.name === exist);
          return item;
      },)
          console.log(previousCart);
          setAdd(previousCart);
    }, [])
    
    const addHandle = () =>{
        const seeData = duplicateData.find(id => id.name === productName);
        setStore(seeData)
    }
    
    const addHandle2 = (pro) =>{
        const cartProduct = [...cart, pro];
        setCart(cartProduct);
        const sameItem = cartProduct.filter(id => id.name === pro.name);
        const count = sameItem.length;
        addToDatabaseCart(pro.name, count);
    }

    const decreaseHandel = (val) => {
        const save = cart.map(id => id);
        console.log(save)
        save.pop();
        setCart(save);
        const newCart = save.filter(find => find.name === val.name);
        const length = newCart.length;
        addToDatabaseCart(val.name, length);
    }

   useEffect(()=>{
       addHandle();
   }, [])

  const {name, description, img, price} = store;
  return (
        <div className="main-container">
         <div>
            <div className ="others">
                <div className="for-word">
                   <h1>{name}</h1>
                   <h7 style={{color: "gray"}}>{description}</h7>
                 </div>
                 <br/>
                 <div className="button btn-group btn-group-lg">
                    <h3>${price}</h3>
                    <button type="button" className="btn btn-primary" onClick={()=> addHandle2(store)}>+</button>
                     <h3>{cart.length}</h3>
                     <button type="button" className="btn btn-primary" onClick={()=> decreaseHandel(store)}>-</button>
                    {/* <h3>{add.length}</h3> */}
                 </div>
            </div>
            <br/>
             <div className="cart">
                <button className="cart-design"><FontAwesomeIcon className="font" icon={faCartPlus}/> Add</button>
             </div>
           </div> 
            <div className="images">
               <img src={img} alt=""/>
            </div>
            
        </div>
        
    );
};

export default ItemDetails;