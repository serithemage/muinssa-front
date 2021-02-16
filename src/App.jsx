import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Main from './Main';
import { createContext } from 'react';
import { Typography } from '@material-ui/core';

export const userContext = createContext({
  nickname: ''
});

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    alignItems: 'center'
  },
}));

function App() {

  const classes = useStyles();

  return ( 
    <Router>
      <AppBar position="static" className={classes.title}>
        <Toolbar>
        <Typography variant="h6">
          MuInSsa : I'm Not InSsa
        </Typography>
        </Toolbar>
      </AppBar>
      <div className="App">
        <Main />
      </div>
      
    </Router>
  );
}

export default App;
