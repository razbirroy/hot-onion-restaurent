import React, { useState } from 'react';
import duplicateData from '../../duplicateData/index';
import MenuPrint from '../MenuPrint/MenuPrint';
import './FoodMenu.css'

const FoodMenu = () => {
    const first12 = duplicateData.slice(0, 17)
    const [element , setElement] = useState(first12)
    
    console.log(element)
    return (
        <div className="flex-container">
           {
               element.map(pd => <MenuPrint product = {pd}></MenuPrint>)
           }
        </div>
    );
};

export default FoodMenu;