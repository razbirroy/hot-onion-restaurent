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
    const {name} = store;
    
    return (
        <div>
            <div>
              <h1>{name}</h1>
            </div>
            <div>
                <button onClick={()=> addHandle2(store), useEffect}>+</button>
                <button onClick={()=> decreaseHandel(store)}>-</button>
                <h2>{cart.length}</h2>
                <h2>{add.length}</h2>
            </div>
        </div>
        
    );
};

export default ItemDetails;