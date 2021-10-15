import React from 'react';

const DisplayComments = (props) => {
    return ( 
        <div>
            {props.comments.map(function(comment){
                return(
                    <div className="comment-box">
                        <h6>{comment.content}</h6>
                        <p>Likes: {comment.like_counter}  Dislikes: {comment.dislike_counter}</p>
                    </div>    
                )
            })}
        </div>
    );
}

export default DisplayComments;