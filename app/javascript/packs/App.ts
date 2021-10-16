import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import home from './home';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
class App extends React.Component {
  render() {
    return (
      <ActionCableProvider url={API_WS_ROOT}>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </ActionCableProvider>
    );
  }
}

export default hot(module)(App);
