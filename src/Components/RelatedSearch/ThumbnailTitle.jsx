import React from 'react';

const ThumbnailTitle = (props) => {

    return ( 
        <div>{props.source.snippet.title}</div>
    );
}

export default ThumbnailTitle;