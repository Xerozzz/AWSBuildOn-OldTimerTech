import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./global/Nav";
import Footer from "./global/Footer";
import Tutorial from "./tutorial/Tutorial";
import Voucher from "./voucher/Voucher";
import Home from "./home/Home";
import React from "react";
import Thank from "./thank/thank"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/voucher" component={Voucher} />
          <Route path="/thank" component={Thank} />
          <AmplifySignOut />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
