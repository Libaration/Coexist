import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import home from './home';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
