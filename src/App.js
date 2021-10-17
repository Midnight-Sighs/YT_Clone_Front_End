import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header'
import ChatBox from './Components/ChatBox/ChatBox'
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';
import EmbeddedPlayer from './Components/EmbeddedPlayer/EmbeddedPlayer'
import ModalComment from './Components/Modal/Modal'
import RelatedSearch from './Components/RelatedSearch/RelatedSearch';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'Find Your Rabbit Hole',
      searchResults: {
        items: []
      },
      videoId: '',
      videoTitle: '',
      videoDescription:'',
      commentId: '',
      newComment: '',
      newReply: '',
      thumbnailPic: '',
      thumbnailDesc: '',
    };
  }


  componentDidMount =()=>{
    this.getVideo(this.state.searchTerm)
  }

  getVideo = async (searchTerm) => {
    try{
        let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyAENeS1XRaes8ZF_A4h9FzB5tUTYfMp46M`);
        this.setState({
          videoTitle:response.data.items[0].snippet.title,
          videoDescription:response.data.items[0].snippet.description,
          videoId:response.data.items[0].id.videoId
        })
        this.getRelatedVideo()
    }
    catch (ex) {
        console.log('Error in getVideo API call', ex);
    }
  }

  getRelatedVideo = async () => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.videoId}&maxResults=3&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyAENeS1XRaes8ZF_A4h9FzB5tUTYfMp46M`);
      this.setState({
        searchResults:response.data,
        thumbnailPic:response.data.items[0].snippet.thumbnails.default.url
      })
    }
    catch (ex){
      console.log('Error in getRelatedVideo API call', ex);
    }
  }

  setSearch = (data)=>{
    this.setState({
      searchTerm:data
    })
    this.getVideo(this.state.searchTerm)
    this.getRelatedVideo()
  } 

  newCommentState=(content)=>{
    this.setState({
        newComment: content
    })
    this.newCommentPost()
  }

  newCommentPost=()=> {
    let newContent = `"${this.state.newComment}"`
    let newComment = {
        "videoId":"WgrLrt4kyDM",
        "content": newContent,
        "like_counter":0,
        "dislike_counter":0
    }
    axios.post('http://127.0.0.1:8000/comments/', newComment)
  }

  render(){
    return (
      <div className = 'bg'>
        <div className="container-fluid">
          <Header setSearch={this.setSearch}/> {/* Full width of screen*/}
        </div>

        <div className="container-fluid"> 
          <div className = "row mt-2 mb-2">
            <div className = "col-4 dcr">
              <DescriptionBox newComment={this.newCommentState} title={this.state.videoTitle} description={this.state.videoDescription} />
              <br />
              <ChatBox videoId={this.state.videoId}/>
            </div>
            <div className = "col-8 evp">
              <EmbeddedPlayer videoId={this.state.videoId}/>
              <br />
              <RelatedSearch src={this.state.searchResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
