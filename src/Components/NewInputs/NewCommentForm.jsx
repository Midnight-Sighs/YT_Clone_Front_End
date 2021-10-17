import React, {useState} from 'react';


const NewCommentForm = (props) => {
    
    const[content, setContent] = useState('')

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
                    <input
                        type='text'
                        name='content'
                        onChange={handleChange}
                        value={content}
                    />
                </label>
                <button type='submit' className="btns">Submit</button>
            </form>
        </div>
    )
}

export default NewCommentForm;