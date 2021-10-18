import React, { Component } from 'react'
import './Chatbox.css';
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
                <DisplayComments newReply={this.props.newReply} comments={this.props.comments} />
                
            </div>
        );
    }
}

export default ChatBox;
