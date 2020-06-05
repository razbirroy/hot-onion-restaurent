import React, { useState } from 'react';
import duplicateData from '../../duplicateData/index';
import MenuPrint from '../MenuPrint/MenuPrint';
import './FoodMenu.css'





const FoodMenu = () => {
    const first12 = duplicateData.slice(0, 6)
    const [element , setElement] = useState(first12)
    
    console.log(element)
    return (
        
              <div className='container'>
                  <div className="row">
                      {
                         element.map(pd => <MenuPrint product = {pd}></MenuPrint>)
                      }

                   </div>   
               </div>
    );
};

export default FoodMenu;