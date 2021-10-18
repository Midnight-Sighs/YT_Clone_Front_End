import React, {useState} from 'react';

const ReplyInputForm = (props) => {

    const[content, setContent] = useState('')

    const handleChange = (event) =>{
        setContent(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.newReply(content, props.commentId)
        props.close()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea
                        type='text'
                        name='content'
                        placeholder='Your Reply Here'
                        onChange={handleChange}
                        value={content}
                        className="modal-field"
                    ></textarea>
                </label>
                <button type='submit' className="btns">Submit</button>
            </form>
        </div>
    )
}

export default ReplyInputForm;