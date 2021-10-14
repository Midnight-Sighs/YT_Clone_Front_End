import './App.css';
import Header from './Components/Header/Header'
import NewCommentForm from './Components/ChatBox/NewCommentForm';


function App() {
  return (
    <div className = 'bg'>
      <h1>RAWR</h1>
      <Header />
      <NewCommentForm />
    </div>
  );
}

export default App;
