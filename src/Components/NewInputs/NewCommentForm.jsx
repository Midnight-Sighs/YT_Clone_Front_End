import React, {useState} from 'react';


const NewCommentForm = (props) => {
    
    const[content, setContent] = useState('')
    const[error, setError] = useState(false)

    const handleChange = (event) =>{
        setContent(event.target.value)
        if(event.target.value.length >249){
            setError(true)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.newComment(content)
        props.close()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea
                        type='text'
                        name='content'
                        placeholder='Your new comment here'
                        onChange={handleChange}
                        value={content}
                        className="modal-field"
                    ></textarea>
                    {error ? <div style="color:red">Your input must be 250 characters or less.</div>:null}
                </label>
                <button type='submit' className="btns">Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;