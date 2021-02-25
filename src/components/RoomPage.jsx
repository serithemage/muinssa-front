import React, { useState, useEffect } from 'react';
import * as AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js';
import {TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Container} from '@material-ui/core';
import {config} from './../config.dev';

const useStyles = makeStyles((theme) => ({
  exit: {
    margin: theme.spacing(3,0,3)
  }
}));  

const initMeetingApp = async (meeting, attendee) => {
  const logger = new ConsoleLogger('ChimeMeetingLogs', LogLevel.INFO);
  const deviceController = new DefaultDeviceController(logger);
  const configuration = new MeetingSessionConfiguration(meeting, attendee);
  const meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
  try {
    const audioInputs = await meetingSession.audioVideo.listAudioInputDevices();
    await meetingSession.audioVideo.chooseAudioInputDevice(audioInputs[0].deviceId);
  } catch (err) {
    // handle error - unable to acquire audio device perhaps due to permissions blocking
  }

  const audioOutputElement = document.getElementById('room-audio-el');
  meetingSession.audioVideo.bindAudioElement(audioOutputElement);
  meetingSession.audioVideo.start();
}

export default function RoomPage(props) {
  const classes = useStyles();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {

    (async () => {
      const url = `${config.url}/join?title=1234&name=${props.nickname}`;
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
      const data = await (await fetch(url, options)).json();
      const meeting = data.JoinInfo.Meeting;
      const attendee = data.JoinInfo.Attendee;
      
      await initMeetingApp(meeting, attendee);
    })();
  }, [])

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
      <audio id="room-audio-el">Audio Element Not Supported</audio>
    </Container>
  );
}