import React from 'react';
import { Provider } from 'react-redux';

import ApplicationNavigation from './navigation';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationNavigation />
      </Provider>
    );
  }
}
