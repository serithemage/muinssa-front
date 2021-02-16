import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './App.css';
import Main from './Main';
import { createContext } from 'react';

export const userContext = createContext({
  nickname: ''
});

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
