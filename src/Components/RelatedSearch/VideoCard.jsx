import React from 'react';
import Thumbnails from './Thumbnails'

const VideoCard = (props)=> {
    return ( 
        <div className="related-search-box">
            
            {props.src.map(function(source) {
                return (
                    <div><img src = {source.snippet.thumbnails.default.url}></img></div>
                )
            })}
        </div>
     );
}

export default VideoCard;