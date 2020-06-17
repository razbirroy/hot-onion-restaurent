import React from 'react';
import { useParams } from 'react-router-dom';
import duplicateData from '../../duplicateData';
import { useState } from 'react';
import { useEffect } from 'react';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import './ItemDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import HeaderTop from '../HeaderTop/HeaderTop';


const ItemDetails = (props) => {
    
    const {productName} = useParams();
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);
    const [add, setAdd] = useState([])
   
    useEffect(()=>{
      const bringData = getDatabaseCart();
      const itemName = Object.keys(bringData);
      const previousCart = itemName.map(exist => {
          const item = duplicateData.find(pd => pd.name === exist);
          return item;
      },)
        // console.log(previousCart);
          setAdd(previousCart);
    }, [])
    // const cartHandle = () =>{
    //     console.log("clicked")
    // }

    const addHandle = () =>{
        const seeData = duplicateData.find(id => id.name === productName);
        setStore(seeData)
    }
    
    const increaseButton = (pro) =>{
        //console.log(pro)
        const cartProduct = [...cart, pro];
        //console.log(cartProduct);
        setCart(cartProduct);
        const sameItem = cartProduct.filter(id => id.name === pro.name);
        //console.log(sameItem)
        const count = sameItem.length;
        addToDatabaseCart(pro.name, count);
    }

    const decreaseButton = (val) => {
        const save = cart.map(id => id);
        //console.log(save)
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
                    <button type="button" className="btn btn-primary" onClick={()=> increaseButton (store)}>+</button>
                     <h3>{cart.length}</h3>
                     <button type="button" className="btn btn-primary" onClick={()=> decreaseButton(store)}>-</button>
                     <h3>{add.length}</h3>
                 </div>
            </div>
            <br/>
             <div className="cart">
               <div>
                 <button className="cart-design" onClick = {() => props.headerCart(add)} ><FontAwesomeIcon className="font" icon={faCartPlus}/> Add</button>
                
               </div>
             </div>
           </div> 
            <div className="images">
               <img src={img} alt=""/>
            </div>
            <div>
               
            </div>
        </div>
        
    );
};

export default ItemDetails;