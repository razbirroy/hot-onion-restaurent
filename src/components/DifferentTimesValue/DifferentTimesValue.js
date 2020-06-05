import React from 'react';

const DifferentTimesValue = (props) => {
  const{name,des,price,img} = props.name;
    return (
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>{des}</p>
            <h2>{price}</h2>
        </div>
    );
};

export default DifferentTimesValue;