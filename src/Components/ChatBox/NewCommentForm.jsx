import React from 'react';
import Submission from '../Submission/Submission'

const NewCommentForm = () => {
    const { data, handleChange, handleSubmit } = Submission(comment);

    function comment() {
        alert(`${data.content}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Content:
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