import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayReplies = (props) => {

    // const[replies, setReplies] = useState([])
    const[hideShow, setHideShow] = useState(false)

    // const getAllReplies = async() =>{
    //     try{
    //         let response = await axios.get(`http://127.0.0.1:8000/comments/${props.comment.id}/replies/`);
    //         setReplies(response.data)
    //     }
    //     catch (ex){
    //         console.log('Error in getAllReplies API call', ex)
    //     }
    // }

    // useEffect(()=>{
    //     getAllReplies();
    // },[]);

    

    const onHideShowClick = () =>{
        setHideShow(!hideShow)
    }

    return ( 
        <>
        <button className="btns reply-btn" onClick={onHideShowClick}>{ hideShow ? "Hide Replies" : "View Replies"}</button>
       <div className="reply-box">
            {(props.replies!=undefined) ? props.replies.map(reply => {
                return(
                    <div >
                        { hideShow ? <h6>{reply.content}</h6> : null}
                    </div>    
                )
            }):
                    <div>
                        
                    </div>
            }
        </div>
        </>
     );
}

export default DisplayReplies;