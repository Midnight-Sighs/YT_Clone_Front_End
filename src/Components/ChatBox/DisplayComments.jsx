import React from 'react';
import Like from './Like'

const DisplayComments = (props) => {

    return ( 
        <div>
            {props.comments.map(function(comment){
                return(
                    <div className="comment-box">
                        <div className="row">
                            <div className="col-9">
                                <h6>{comment.content}</h6>
                                <p>Dislikes: {comment.dislike_counter}</p>
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
                                    <button className ="icon-btns" aria-label="Disike">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"/>
                                    </svg>
                                    </button>
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