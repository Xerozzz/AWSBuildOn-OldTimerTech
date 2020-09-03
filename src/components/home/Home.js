import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
      <img id="oldman" src="static/css/img/oldmanyeye.jpg" alt="old man"/>
      <header>
        <p className="Jumbo" id="home-p">No need call ah boy liao</p>
        <h1 className="Jumbo">Majulah!</h1>
        <p>
          E-payments made simple! With Old Timer Tech, you can learn
          how-to's of e-payments and earn points by completing tutorials!
          Redeem
          e-vouchers from NTUC, Old Chang Kee and More!
        </p>
        <button id="home-button">
        {
          <Link to="/tutorial">Get started!</Link>
        }
        </button>
      </header>
      <img id="aws" src="static/css/img/poweredbyaws.png" alt="aws"/>
      </React.Fragment>
    );
  }
}

export default Home;
