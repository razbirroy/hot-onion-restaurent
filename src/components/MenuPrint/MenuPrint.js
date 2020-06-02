import React from 'react';
import './MenuPrint.css'

const MenuPrint = (props) => {
    const {name, des, price, img} =  props.product
    return (
        <div className="menu-style">
            <img src={img} alt=""/>
        </div>
    );
};

export default MenuPrint;