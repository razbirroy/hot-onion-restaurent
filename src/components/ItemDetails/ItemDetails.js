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
   
    useEffect(()=>{
      const bringData = getDatabaseCart();
      console.log(bringData)
      const itemName = Object.keys(bringData);
      console.log(itemName)
      const previousCart = itemName.map(exist => {
          const item = duplicateData.filter(pd => pd.name === exist);
          item.quantity = bringData[exist];
          return item;
      })
      setStore(previousCart);
    }, [])
    
    const addHandle = () =>{
        const seeData = duplicateData.find(id => id.name === productName);
        setStore(seeData)
    }
    
    const addHandle2 = (pro) =>{
        const cartProduct = [...cart, pro];
        setCart(cartProduct);
        const sameItem = cartProduct.filter(id => id.name === pro.name);
        //console.log(sameItem)
        const count = sameItem.length;
        addToDatabaseCart(pro.name, count);
    }

    const decreaseHandel = (val) => {
        const save = cart.map(id => id);
        //console.log(save)
        save.pop();
        setCart(save);
        const newCart = save.filter(find => find.name === val.name);
        //console.log(newCart)
        const length = newCart.length;
        addToDatabaseCart(val.name, length)
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
                <button onClick={()=> decreaseHandel(store)}>-</button>
                <h2>{cart.length}</h2>
            </div>
        </div>
        
    );
};

export default ItemDetails;