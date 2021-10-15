import './App.css';
import Header from './Components/Header/Header'
import ChatBox from './Components/ChatBox/ChatBox'
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';


function App() {
  return (
    <div className = 'bg'>
      <div className="container-fluid">
        <Header /> {/* Full width of screen*/}
      </div>

      {/* Need to create 2 columns for the rest */}
      <div className="fluid-container"> 
        <div className = "row mt-2 mb-2">
          <div className = "col-5 dcr">
            <DescriptionBox />
            <br />
            <ChatBox />
          </div>
          <div className = "col-7 evp">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
