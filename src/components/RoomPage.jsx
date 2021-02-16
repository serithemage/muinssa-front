import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Container} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  exit: {
    margin: theme.spacing(3,0,3)
  }
}));  

export default function RoomPage(props) {
  const classes = useStyles();
  const [attendees, setAttendees] = useState([]);

  return (
    <Container maxWidth="xs">
      <Button
        className={classes.exit}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        margin="normal"
      >
        Exit
      </Button>
      RoomPage {props.match.params.id}
    </Container>
  );
}