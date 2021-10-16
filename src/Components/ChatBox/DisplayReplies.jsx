import React from 'react';

const DisplayReplies = (props) => {
    return ( 
        <div>
            {props.replies.map(function(reply){
                return(
                    <div >
                        <h6>{reply.content}</h6>
                    </div>    
                )
            })}
        </div>
    );
}

export default DisplayReplies;