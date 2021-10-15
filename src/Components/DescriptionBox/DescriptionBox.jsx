import React from 'react';
import './Description.css'

const DescriptionBox = (props) => {

    return ( 
        <div className="description-box">
            <h4>Title: {props.title}</h4>
            <p>Description{props.description}</p>
        </div>
     );
}

export default DescriptionBox;