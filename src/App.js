import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header'
import ChatBox from './Components/ChatBox/ChatBox'
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';
import EmbeddedPlayer from './Components/EmbeddedPlayer/EmbeddedPlayer'
import ModalComment from './Components/Modal/Modal'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'Find Your Rabbit Hole',
      searchResults: {},
      videoId: '',
      videoTitle: '',
      videoDescription:'',
      commentId: '',
      newComment: '',
      newReply: '',
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
    }
    catch (ex) {
        console.log('Error in getVideo API call', ex);
    }
  }

  getRelatedVideo = async () => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.videoId}&maxResults=3&type=video&videoEmbeddable=true&relevanceLanguage=EN&order=relevance&key=AIzaSyAENeS1XRaes8ZF_A4h9FzB5tUTYfMp46M`);
      this.setState({
        searchResults:response.data
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
    this.forceUpdate()
    this.getVideo(this.state.searchTerm)
  } 

  render(){
    return (
      <div className = 'bg'>
        <div className="container-fluid">
          <Header setSearch={this.setSearch}/> {/* Full width of screen*/}
        </div>
        <ModalComment />

        {/* Need to create 2 columns for the rest */}
        <div className="container-fluid"> 
          <div className = "row mt-2 mb-2">
            <div className = "col-4 dcr">
              <DescriptionBox title={this.state.videoTitle} description={this.state.videoDescription} />
              <br />
              <ChatBox />
            </div>
            <div className = "col-8 evp">
              <EmbeddedPlayer videoId={this.state.videoId}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
