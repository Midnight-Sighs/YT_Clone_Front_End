import React, { useState} from 'react';

const Submission = (callback) =>{

    const[data, setValues] = useState('');

    const handleChange = (event) => {
        event.preventDefault()
        setValues({ data, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        callback(data);
    }

    return{
        data,
        handleChange,
        handleSubmit,
    };

}

export default Submission