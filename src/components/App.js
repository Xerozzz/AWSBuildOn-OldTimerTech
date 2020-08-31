import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Nav from './global/Nav'
import { Switch, Route, Router } from 'react-router-dom'
import TutorialPage from './tutorial/tutorialPage'
import TutorialRow from './tutorial/tutorialRow'
import history from '../history'

function App() {
  return (
    <Router history={history}>
      <div>
          <Route exact path="/tutorialsPage">
            <TutorialPage />
          </Route>
          <Route exact path="/">
              <div className="App">
          <header>
            <p>yeyes</p>
            <h1>Auth is cool!</h1>
          </header>
          <AmplifySignOut />
          </div>
          </Route>      
        </div>
    </Router>
  );
}


export default withAuthenticator(App);