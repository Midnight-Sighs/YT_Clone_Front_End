import React, { useState, useEffect } from 'react';

const Submission = (callback) =>{

    const[data, setValues] = useState('');

    const handleChange = (event) => {
        event.persist();
        setValues({ data, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(data);
    }

    return{
        data,
        handleChange,
        handleSubmit,
    };

}

export default Submission