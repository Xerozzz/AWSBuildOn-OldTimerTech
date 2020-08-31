import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <p>yeye</p>
        <h1>Auth is cool!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);