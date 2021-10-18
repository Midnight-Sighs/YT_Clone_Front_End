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

  //Axios Calls
  //#region
  getVideo = async () => {
    try{
        let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.searchTerm}&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyAt0JL2pLqc_abwSbw0acykRf7sKX4wlYs`);
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
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.videoId}&maxResults=4&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyAt0JL2pLqc_abwSbw0acykRf7sKX4wlYs`);
      this.setState({
        searchResults: response.data,
      })
    }
    catch (ex){
      console.log('Error in getRelatedVideo API call', ex);
    }
  }

  getAllComments = async () => { /* Gets comments related to the video */
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

  postReply = async() => { /* Gets comments related to the video */
    let newReply = {
      "content": this.state.newReply,
      "comment": this.state.commentId,
    }
    try{
      await axios.post(`http://127.0.0.1:8000/comments/${this.state.commentId}/replies/`, newReply);
    }
    catch (ex){
      console.log('Error in postReply API call.', ex)
    }
  }


  postComment = async() => { /* Gets comments related to the video */
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

  newReplyState=(content, id)=>{
    this.setState({
        newReply: content,
        commentId: id
    }, () =>{
      this.postReply();
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
              <ChatBox newReply={this.newReplyState} comments={this.state.comments} videoId={this.state.videoId}/>
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
