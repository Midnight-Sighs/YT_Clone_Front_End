import React, {useState} from 'react';


const NewCommentForm = (props) => {
    
    const[content, setContent] = useState('')
    const[errorAlert] = useState('Input must be less than 250 characters')
    const[error, setError] = useState(false)

    const handleChange = (event) =>{
        setContent(event.target.value) 
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
                </label>
                <button type='submit' className="btns">Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;