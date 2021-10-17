import React, { Component } from 'react'
import './Chatbox.css';
import axios from 'axios';
import DisplayComments from './DisplayComments'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: 'eX2qFMC8cFo',
            commentId: '',
            comments: [],
        }
    }
    
    render(){
        return ( 
            <div className="lowest-chat-box">
                <DisplayComments comments={this.state.comments} />
                
            </div>
        );
    }
}

export default ChatBox;
