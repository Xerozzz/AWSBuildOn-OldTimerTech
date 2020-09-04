import React from "react";

class SignOutButton extends React.Component {
  render() {
    return (
      <amplify-sign-out class="hydrated">
        <amplify-button
          slot="sign-out"
          data-test="sign-out-button"
          class="hydrated"
        >
          <button className="button" type="button">
            <slot></slot>
          </button>
        </amplify-button>
      </amplify-sign-out>
    );
  }
}

export default SignOutButton