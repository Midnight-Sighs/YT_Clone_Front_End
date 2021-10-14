import React, { useState } from 'react';
import Submission from '../Submission/Submission'

const ReplyInputForm => {
    const { setValues, handleChange, handleSubmit } = useReplyForm(reply);

    // function reply() {
        
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Content:
                    <input
                        type='content'
                        name='content'
                        onChange={handleChange}
                        value={}
                    />
                </label>
            </form>
        </div>
    )
}