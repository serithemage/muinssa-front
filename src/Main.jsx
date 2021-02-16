import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Page404 from './components/Page404';
import RoomListPage from './containers/RoomListPage';
import RoomPage from './components/RoomPage';

export default function Main() {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          render={() => <HomePage />}
        />
        <Route
          exact path='/rooms'
          render={() => <RoomListPage />}
        />
        <Route
          exact path='/rooms/:id'
          component={RoomPage}
        />
        <Route component={Page404} />
      </Switch>
		</div>
	)
}