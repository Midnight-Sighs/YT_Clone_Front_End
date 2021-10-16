import React from 'react';
import ThumnailTitle from './ThumbnailTitle';
import Thumbnail from './Thumbnail'

const VideoCards = (props)=> {

    return ( 
        <div className="related-search-box">
            
            {props.src.items.map(source => {
                return (
                    <>
                        <div><Thumbnail source={source} /></div>
                        <div><ThumnailTitle source={source} /></div>
                    </>
                )
            })}
        </div>
     );
}

export default VideoCards;