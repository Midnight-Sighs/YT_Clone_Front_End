import React from 'react';

const Thumbnail = (props) => {

    return ( 
        <div>
            <img src = {props.source.snippet.thumbnails.default.url}></img>
        </div>
     );
}

export default Thumbnail;