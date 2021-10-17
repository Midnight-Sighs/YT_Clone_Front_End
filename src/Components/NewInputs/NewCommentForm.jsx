import React from 'react';
import Submission from '../Submission/Submission'


const NewCommentForm = (props) => {
    const { data, handleChange, handleSubmit } = Submission(comment);

    function comment(){
        props.newComment(data.content)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type='text'
                        name='content'
                        onChange={handleChange}
                        value={data.content}
                    />
                </label>
                <button type='submit' className="btns">Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;