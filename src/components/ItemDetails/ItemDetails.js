import React from 'react';
import { useParams } from 'react-router-dom';
import duplicateData from '../../duplicateData';

const ItemDetails = () => {
    const {productName} = useParams()
    const seeData = duplicateData.find(id => id.name === productName)
    console.log(seeData)
    return (
        <div>
           <h1>This is my product</h1> 
        </div>
    );
};

export default ItemDetails;