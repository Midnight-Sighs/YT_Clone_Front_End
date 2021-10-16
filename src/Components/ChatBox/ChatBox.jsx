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
            replies: [],
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

    async getAllReplies(){
        try{
            let response = await axios.get(`http://127.0.0.1:8000/comments/${this.state.commentId}/replies/`);
            this.setState({
                replies: response.data
            });
        }
        catch (ex){
            console.log('No replies or error reaching replies')
        }
    }

    async dislikeComment(){
        try{
            let response = await axios.patch(`http://127.0.0.1:8000/dislikes/${this.state.commentId}/`);
        }
        catch (ex){
            console.log('Error getting likes')
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
