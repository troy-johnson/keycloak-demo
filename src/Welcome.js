import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>Keycloak Demo -- Clicking "secured component" will take you to login screen if not already logged in.</p>
      </div>
    );
  }
}
export default Welcome;
