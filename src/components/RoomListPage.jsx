import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function RoomListPage(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Hello {props.nickname}
      </Typography>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {rows.map((row) => (
            <ListItem button key={row.id}>
              {row.lock?(<ListItemIcon>
                <LockIcon />
              </ListItemIcon>):(<></>)}
              <ListItemText primary={row.subject} />
            </ListItem>
          ))}
        </List>
        
      </div>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more rooms
        </Link>
      </div>
    </Container>
  );
}
