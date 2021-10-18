import React from 'react';
import ThumnailTitle from './ThumbnailTitle';
import Thumbnail from './Thumbnail';

const VideoCard = (props) => {

    return ( 
        <>
            <div>
                <Thumbnail source={props.source} playClickedVideo={props.playClickedVideo}/>
            </div>
            <div>
                <ThumnailTitle source={props.source} />
            </div>
           </>
    );
}

export default VideoCard;



