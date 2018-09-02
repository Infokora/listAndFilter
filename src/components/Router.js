import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Stack,
  ActionConst,
} from 'react-native-router-flux';

import Profile from './components/pages/profile';
import UserList from './components/pages/userList';

export default class Routers extends Component {

  render() {
    return (
      <Router>
        <Scene
          type={ActionConst.RESET}
          key="userList"
          component={Profile}
          title='Search'
          initial
        />

        <Scene
          key="userList"
          component={UserList}
        />
      </Router>
    )
  }
}