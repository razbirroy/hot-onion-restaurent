import React from 'react';
import { useParams } from 'react-router-dom';
import duplicateData from '../../duplicateData';
import { useState } from 'react';
import { useEffect } from 'react';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'

const ItemDetails = () => {
    const {productName} = useParams();
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);
    const addHandle = () =>{
        const seeData = duplicateData.find(id => id.name === productName);
        setStore(seeData)
    }
    
    const addHandle2 = (props) =>{
        const cartProduct = [...cart, props];
        setCart(cartProduct);
        const sameItem = cartProduct.filter(id => id.name === props.name);
        const count = sameItem.length;
        addToDatabaseCart(props.name, count);
    }

    const deletHandel = () => {
        const savedCart = getDatabaseCart();
        const itemName = Object.keys(savedCart)
        console.log(itemName)
    }

   useEffect(()=>{
       addHandle();
   }, [])
    const {name} = store;
    
    return (
        <div>
            <div>
              <h1>{name}</h1>
            </div>
            <div>
                <button onClick={()=> addHandle2(store)}>+</button>
                <button onClick={()=> deletHandel()}>-</button>
                <h2>{cart.length}</h2>
            </div>
        </div>
        
    );
};

export default ItemDetails;