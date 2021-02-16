import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Lock as LockIcon } from '@material-ui/icons';
import {TextField,
        Button,
        List,
        ListItem,
        ListItemIcon,
        ListItemText,
        Typography,
        Container} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  hello: {
    margin: theme.spacing(5,0,3)
  },
  create: {
    
  },
  list: {
    marginTop: theme.spacing(3),
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

// Generate Room
const createRoom = (id, subject, attendeesNo, lock) => {
  return { id, subject, attendeesNo, lock };
}

const rows = [
  createRoom(0, 'roomA', 1, true),
  createRoom(1, 'roomB', 3, false),
  createRoom(2, 'roomC', 4, true),
  createRoom(3, 'roomD', 7, false)
];

function preventDefault(event) {
  event.preventDefault();
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function RoomListPage(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Typography className={classes.hello} component="h2" color="primary" variant="h6" gutterBottom>
        Hello {props.nickname}
      </Typography>
      <div>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            id="roomName"
            label="Room Title"
            name="roomName"
            size="small"
          />
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            size="small"
          />
          <Link to="/rooms">
            <Button
              component="Link"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Create Room
            </Button>
          </Link>
      </div>
      <div className={classes.list}>
        <List component="nav" aria-label="main mailbox folders">
          {rows.map((row) => (
            <ListItemLink button key={row.id} href={"rooms/" + row.id}>
              {row.lock?(<ListItemIcon>
                <LockIcon />
              </ListItemIcon>):(<></>)}
              <ListItemText primary={row.subject} />
            </ListItemLink>
          ))}
        </List>  
      </div>
      
    </Container>
  );
}
