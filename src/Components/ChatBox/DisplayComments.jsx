import React from 'react';
import Like from './Like'
import Dislike from './Dislike'
import DisplayReplies from './DisplayReplies.jsx'

const DisplayComments = (props) => {

    return ( 
        <div>
            {props.comments.map(function(comment){
                return(
                    <div className="comment-box">
                        <div className="row show-me">
                            <div className="col-9">
                                <h6>{comment.content}</h6>
                                <DisplayReplies comment={comment}/>
                            </div>
                            <div className="col-3">
                                <div className="row pt-1">
                                    <Like comment={comment}/>
                                </div>
                                <div className="row pt-2">
                                    <button className ="icon-btns" aria-label="Reply">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                    </button>
                                </div>
                                <div className="row pt-2 bt-1">
                                    <Dislike comment={comment} />
                                </div>
                            </div>
                        </div> 
                    </div>    
                )
            })}
        </div>
    );
}

export default DisplayComments;