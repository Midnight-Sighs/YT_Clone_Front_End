import React from 'react';

const Thumbnail = (props) => {

    return ( 
        <div>
            <img className="thumbnail-pic" src = {props.source.snippet.thumbnails.default.url} onClick={event => props.playClickedVideo(props.source)} ></img>
        </div>
    );
}

export default Thumbnail;