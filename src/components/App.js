import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Nav from './global/Nav'
import { Switch, Route, Router } from 'react-router-dom'
import TutorialPage from './tutorial/tutorialPage'
import TutorialRow from './tutorial/tutorialRow'
import history from '../history'
import '../components/tutorial/tutorials.css'

function App() {
  return (
    <Router history={history}>
      <div className='App' style={{height: '100vh', overflow: 'auto', margin: '0', padding: '0'}}>
          <Route path="/tutorialsPage">
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