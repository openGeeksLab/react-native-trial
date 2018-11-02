import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import styles from './styles';

import HomeScreen from '../screens/Home';
import ViewScreen from '../screens/View';

const ApplicationNavigation = () => {
  return (
    <Router>
      <Scene
        key="root"
        titleStyle={styles.headerContainer}
        navigationBarStyle={styles.headerContainer}
      >
        <Scene key="user"
          initial
          component={HomeScreen}
        />
        <Scene
          key="gray"
          title="Gray"
          component={ViewScreen}
        />
      </Scene>
    </Router>
  );
};

export default ApplicationNavigation;
