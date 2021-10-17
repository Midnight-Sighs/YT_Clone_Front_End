import React, { Component } from 'react'
import './Chatbox.css';
import Submission from '../Submission/Submission'
import NewCommentForm from './NewCommentForm'
import axios from 'axios';
import DisplayComments from './DisplayComments'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: 'zAYIBPBEiWU', /* The cat video*/
            commentId: '',
            comments: [],
            newComment: '',
            newReply: '',
        }
    }

    componentDidMount = ()=>{
        this.getAllComments()
    }

    async getAllComments(){ /* Gets comments related to the video */
        try{
            let response = await axios.get(`http://127.0.0.1:8000/${this.state.videoId}/`);
            this.setState({
            comments: response.data
            });
        }
        catch (ex){
            console.log('No comments or Error getting Comments.')
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
