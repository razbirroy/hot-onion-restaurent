import React, { useState, useEffect } from 'react';
import duplicateData from '../../duplicateData/index'; 
import './DifferentTime.css';
import MenuPrint from '../MenuPrint/MenuPrint';
import { Link } from 'react-router-dom'




const DifferentTime = () => {
   
    const fake20 = duplicateData.slice(0, 18);
    const [cart, setCart] = useState(fake20)
    const [current, setCurrent] = useState([]);
   
    const addHandle = (value) =>{
       const specificMeal = cart.filter(id => id.category === value)
       setCurrent(specificMeal)
    }
    
    useEffect(()=> {
        addHandle("Lunch");
    }, []);
   
   return(
           <div>
                <div className="pressButton">
                    <button onClick={() => addHandle("Breakfast")}>Breakfast</button>
                    <button onClick={() => addHandle("Lunch")}>Lunch</button>
                    <button onClick={() => addHandle("Dinner")}>Dinner</button>
                </div>    
             <div className='row'>
                {
                   current.map(product => <MenuPrint product={product} ></MenuPrint>)
                   
               }
             </div>
            
        </div>   
    );
};

export default DifferentTime;