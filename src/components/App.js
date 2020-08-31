import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Nav from './global/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Auth is cool!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);