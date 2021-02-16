import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'react-router-dom/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MicIcon from '@material-ui/icons/Mic';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Hobby © '}
      <Link color="inherit" href="https://github.com/jakemraz">
        jakemraz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  const [nickname, setNickname] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MicIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          MuInSsa
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="nickname"
            label="Nickname"
            name="nickname"
            autoFocus
            onChange={(e) => setNickname(e.target.value)}
          />
          <Link to="/rooms">
            <Button
              component="Link"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={function(){props.onClick(nickname)}}
            >
              Connect
            </Button>
          </Link>
        </form>
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
}
