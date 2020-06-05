import React, { useState } from 'react';
import duplicateData from '../../duplicateData/index'; 
import DifferentTimesValue from '../DifferentTimesValue/DifferentTimesValue';

const DifferentTime = () => {
   
    const fake20 = duplicateData.slice(0, 18);
    const [cart, setCart] = useState(fake20)
    
     return (
        <div>
             <h2>We are Happy</h2>
            {
                cart.filter(id => id.category === "Breakfast").map(name => <DifferentTimesValue name = {name}></DifferentTimesValue>)
            }
             
        </div>
    );
};

export default DifferentTime;