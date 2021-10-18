import React from 'react';
import './RelatedSearch.css'

const ThumbnailTitle = (props) => {

    return ( 
        <div className='thumbnail-title'>{props.source.snippet.title}</div>
    );
}

export default ThumbnailTitle;