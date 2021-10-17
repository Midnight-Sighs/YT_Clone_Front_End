import React from 'react';
import VideoCard from './VideoCard';

const VideoCards = (props) => {

    return ( 
        <div className="related-search-box">
            {props.src.items.map(source => {
                return (
                    <div>
                        <VideoCard source={source} playClickedVideo={props.playClickedVideo} />
                    </div>
                )
            })}
        </div>
    );
}

export default VideoCards;