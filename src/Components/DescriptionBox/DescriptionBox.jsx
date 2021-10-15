import React from 'react';
import './Description.css'

const DescriptionBox = (props) => {

    return ( 
        <div className="description-box">
            <h1>Title: {props.title}</h1>
            <span>Description{props.description}</span>
        </div>
     );
}

export default DescriptionBox;