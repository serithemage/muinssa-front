import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
