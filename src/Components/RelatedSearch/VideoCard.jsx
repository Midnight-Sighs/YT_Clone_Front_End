import React from 'react';
import ThumnailTitle from './ThumbnailTitle';
import Thumbnail from './Thumbnail';

const VideoCard = (props) => {

    return ( 
        <>
            <div>
                <Thumbnail source={props.source} />
            </div>
            <div>
                <ThumnailTitle source={props.source} />
            </div>
           <button className='btns' onClick={event => props.playClickedVideo(props.source)}>Play Video</button>
        </>
    );
}

export default VideoCard;



