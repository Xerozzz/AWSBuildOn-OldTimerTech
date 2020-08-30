import React from 'react';
import '../../public/static/css/App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Auth is cool!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);