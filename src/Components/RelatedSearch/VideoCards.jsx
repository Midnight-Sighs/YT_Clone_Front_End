import React from 'react';
import VideoCard from './VideoCard';
import './RelatedSearch.css';

const VideoCards = (props) => {

    return ( 
        <div className='related-cards'>
            {props.src.items.map(source => {
                return (
                    <div className='related-card'>
                        <VideoCard source={source} playClickedVideo={props.playClickedVideo} />
                    </div>
                )
            })}
        </div>
    );
}

export default VideoCards;