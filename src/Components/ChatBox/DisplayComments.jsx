import React from 'react';
import Like from './Like'
import Dislike from './Dislike'
import DisplayReplies from './DisplayReplies.jsx'
import ReplyModal from '../Modal/ReplyModal'

const DisplayComments = (props) => {

    return ( 
        <div>
            {props.comments.map(function(comment){
                return(
                    <div className="comment-box">
                        <div className="row">
                            <div className="col-9 comment-content">
                                <h6>{comment.content}</h6>
                            </div>
                            <div className="col-md-3">
                                <div className="row pt-1">
                                    <Like comment={comment}/>
                                </div>
                                
                                <div className="row pt-2 bt-1">
                                    <Dislike comment={comment} />
                                </div>
                            </div>
                        </div> 
                        <div>
                            <ReplyModal commentId={comment.id} newReply={props.newReply}/>
                        </div>
                        <div>
                            <DisplayReplies replies={props.replies} comment={comment}/>
                        </div>
                    </div>    
                )
            })}
        </div>
    );
}

export default DisplayComments;