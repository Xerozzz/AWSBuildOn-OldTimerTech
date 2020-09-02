import React from "react";

class Home extends React.Component {
  render() {
    return (
      <header>
        <h1 className="Jumbo">No need call ah boy liao</h1>
        <h1 className="Jumbo">Majulah!</h1>
        <p>
          E-payments made simple! With Old Timer Tech, you can learn
          how-to's of e-payments and earn points by completing tutorials!
          Redeem
          e-vouchers from NTUC, Old Chang Kee and More!
        </p>
        <a><button id="home-button">Get started!</button></a>
      </header>
    );
  }
}

export default Home;
