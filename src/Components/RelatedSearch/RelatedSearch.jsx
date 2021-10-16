import React from 'react';
import './RelatedSearch.css'
import VideoCards from './VideoCards'

const RelatedSearch = (props)=> {
   return ( 
      <div className="related-search-box">
         <VideoCards src={props.src} />
      </div>
   );
}

export default RelatedSearch;