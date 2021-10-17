import React from 'react';
import './RelatedSearch.css';
import VideoCards from './VideoCards';

const RelatedSearch = (props) => {

   return ( 
      <div className="related-search-box">
         <VideoCards src={props.src} playClickedVideo={props.playClickedVideo} />
      </div>
   );
}

export default RelatedSearch;