import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import Nav from 'global/nav'
import Switch from 'react-router-dom'
// import TutorialPage from 'tutorial/t'

function App() {
  return (
    <div className="App">
      <Nav>

      </Nav>
      <header>
        <p>yeye</p>
        <h1>Auth is cool!</h1>
      </header>
      <Switch>
        <Route path='tutorialsPage' component={TutorialPage}/>
      </Switch>
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);