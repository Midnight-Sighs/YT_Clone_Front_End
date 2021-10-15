import './App.css';
import Header from './Components/Header/Header'
import ChatBox from './Components/ChatBox/ChatBox'
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';
import EmbeddedPlayer from './Components/EmbeddedPlayer/EmbeddedPlayer'
import ModalComment from './Components/Modal/Modal'

// getVideo = async () => {
//   try{
//       let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&type=video&videoEmbeddable=true&key=${AIzaSyCI3phO0sFUYY_0PnAha7ktzHJMH99UBBw}}/'`);

//   }
//   catch (ex) {
//       console.log('Error in getVideo API call', ex);
//   }
// }

function App() {
  return (
    <div className = 'bg'>
      <div className="container-fluid">
        <Header /> {/* Full width of screen*/}
      </div>
      <ModalComment />

      {/* Need to create 2 columns for the rest */}
      <div className="container-fluid"> 
        <div className = "row mt-2 mb-2">
          <div className = "col-4 dcr">
            <DescriptionBox />
            <br />
            <ChatBox />
          </div>
          <div className = "col-8 evp">
            <EmbeddedPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
