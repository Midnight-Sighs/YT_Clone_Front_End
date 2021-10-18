import React, { Component } from 'react'
import './Chatbox.css';
import axios from 'axios';
import DisplayComments from './DisplayComments'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: this.props.videoId,
            commentId: '',
            comments: this.props.comments,
        }
    }


    render(){
        return ( 
            <div className="lowest-chat-box">
                <DisplayComments comments={this.props.comments} />
                
            </div>
        );
    }
}

export default ChatBox;
