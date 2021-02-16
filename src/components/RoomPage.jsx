import React, { useState, useEffect } from 'react';
import {TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Container} from '@material-ui/core';


export default function RoomPage(props) {

  const [attendees, setAttendees] = useState([]);

  return (
    <Container maxWidth="xs">
      RoomPage {props.match.params.id}
    </Container>
  );
}