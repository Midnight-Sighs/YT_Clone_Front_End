import React, { useState} from 'react';

const Submission = (callback) =>{

    const[data, setValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setValues({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return{
        data,
        handleChange,
        handleSubmit,
    };
}

export default Submission