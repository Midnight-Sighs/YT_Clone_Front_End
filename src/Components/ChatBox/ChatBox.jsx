import React from 'react';
import './Chatbox.css';
import NewCommentForm from './NewCommentForm'
const ChatBox = ()=>{
    return ( 
        <div className="lowest-chat-box">
            <NewCommentForm />
            {/* Will hold the comments and replies */}
        </div>
     );
}

export default ChatBox;
