import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header'
import ChatBox from './Components/ChatBox/ChatBox'
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';
import EmbeddedPlayer from './Components/EmbeddedPlayer/EmbeddedPlayer'
import RelatedSearch from './Components/RelatedSearch/RelatedSearch';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'Dungeons and Dragons',
      searchResults: {
        items: []
      },
      videoId: '',
      videoTitle: '',
      videoDescription:'',
      commentId: '',
      newComment: '',
      newReply: '',
      comments: [],
    };
  }

  componentDidMount = () => {
    this.getVideo(this.state.searchTerm);
    this.getAllComments();
  }

  //#region
  // Axios Calls
  getVideo = async () => {
    try{
        let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.searchTerm}&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyCI3phO0sFUYY_0PnAha7ktzHJMH99UBBw`);
        this.setState({
          videoTitle: response.data.items[0].snippet.title,
          videoDescription: response.data.items[0].snippet.description,
          videoId: response.data.items[0].id.videoId,
        })
        this.getRelatedVideo()
        this.getAllComments()
    }
    catch (ex) {
        console.log('Error in getVideo API call', ex);
    }
  }

  getRelatedVideo = async () => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.videoId}&maxResults=3&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyCI3phO0sFUYY_0PnAha7ktzHJMH99UBBw`);
      this.setState({
        searchResults: response.data,
      })
    }
    catch (ex){
      console.log('Error in getRelatedVideo API call', ex);
    }
  }

  async getAllComments(){ /* Gets comments related to the video */
    try{
        let response = await axios.get(`http://127.0.0.1:8000/${this.state.videoId}/`);
        this.setState({
        comments: response.data
        });
    }
    catch (ex){
        console.log('Error in getAllComments API call.', ex)
    }
  }

  async postComment(){ /* Gets comments related to the video */
    let newComment = {
      "videoId": this.state.videoId,
      "content": this.state.newComment,
      "like_counter":0,
      "dislike_counter":0
    }
    try{
      await axios.post('http://127.0.0.1:8000/comments/', newComment);
      this.getAllComments();
    }
    catch (ex){
      console.log('Error in postComment API call.', ex)
    }
  }

  //#endregion

  setSearch = (searchObject) => {
    let searchTerm = searchObject.searchTerm
    this.setState({
      searchTerm: searchTerm
    }, () => {
      this.getVideo(this.state.searchTerm)
    });
  }

  playClickedVideo = (videoItem) => {
    this.setState({
      comments: [],
      videoTitle: videoItem.snippet.title,
      videoDescription: videoItem.snippet.description,
      videoId: videoItem.id.videoId
    }, () => {
      this.getAllComments()
    });
  }

  newCommentState=(content)=>{
    this.setState({
        newComment: content
    }, () =>{
      this.postComment();
    });
  }

  render(){
    return (
      <div className = 'bg'>
        <div className="container-fluid">
          <Header setSearch={this.setSearch} /> {/* Full width of screen*/}
        </div>

        <div className="container-fluid"> 
          <div className = "row mt-2 mb-2">
            <div className = "col-4 dcr">
              <DescriptionBox newComment={this.newCommentState} post={this.newCommentPost} title={this.state.videoTitle} description={this.state.videoDescription} />
              <br />
              <ChatBox comments={this.state.comments} videoId={this.state.videoId}/>
            </div>
            <div className = "col-8 evp">
              <EmbeddedPlayer videoId={this.state.videoId} />
              <br />
              <RelatedSearch src={this.state.searchResults} playClickedVideo={this.playClickedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
