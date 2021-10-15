import React from 'react';
import './EmbeddedPlayer.css'
import axios from 'axios';

const EmbeddedPlayer=(props)=> {

    return ( 
        <>
        <iframe id="ytplayer" type="text/html" width="720" height="405"
            src="https://www.youtube.com/embed/vNsA6Cjr5Tg"
            frameborder="0" allowfullscreen></iframe>
        </>
     );
}

export default EmbeddedPlayer;