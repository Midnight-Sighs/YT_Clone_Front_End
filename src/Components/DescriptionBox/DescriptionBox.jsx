import React from 'react';
import './Description.css'
import Modal from '../Modal/Modal'


const DescriptionBox = (props) => {

    return ( 
        <>
        <div className="description-box">
            <div className='description-text'>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
            <div className="comment-btn">
            <Modal />
            </div>
        </div>
        </>
     );
}

export default DescriptionBox;