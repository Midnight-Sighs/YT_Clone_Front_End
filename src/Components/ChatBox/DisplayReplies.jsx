import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayReplies = (props) => {

    const[replies, setReplies] = useState([])
    const[hideShow, setHideShow] = useState(false)

    const getAllReplies = async() =>{
        try{
            let response = await axios.get(`http://127.0.0.1:8000/comments/${props.comment.id}/replies/`);
            setReplies(response.data)
        }
        catch (ex){
            console.log('No replies or error reaching replies')
        }
    }

    useEffect(()=>{
        getAllReplies();
    },[]);

    const onHideShowClick = () =>{
        setHideShow(!hideShow)
    }

    return ( 
        <>
        <button className="btns reply-btn" onClick={onHideShowClick}>Replies</button>
        <div className="reply-box">
            {replies.map(function(reply){
                return(
                    <div >
                        { hideShow ? <h6>{reply.content}</h6> : null}
                    </div>    
                )
            })}
        </div>
        </>
     );
}

export default DisplayReplies;