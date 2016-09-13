/* globals document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
