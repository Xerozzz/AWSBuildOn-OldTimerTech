import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Nav from './global/Nav'
import { Switch, Route, Router } from 'react-router-dom'
import TutorialPage from './tutorial/tutorialPage'

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/tutorialsPage">
            <TutorialPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
          <div className="App">
      <header>
        <p>yeyes</p>
        <h1>Auth is cool!</h1>
      </header>
      <AmplifySignOut />
      </div>
      
          </Route>
        </Switch>
        </div>
    </Router>
  );
}


export default withAuthenticator(App);