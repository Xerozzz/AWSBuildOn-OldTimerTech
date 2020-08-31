import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './store';

Amplify.configure(config);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


