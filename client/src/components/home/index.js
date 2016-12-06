import React, { Component } from 'react';
import button from './button.png';

class App extends Component {
  render() {
    const { protocol, hostname, port } = window.location;
    const returnUrl = `${protocol}//${hostname}:${port}/authenticated`;
    const location = `http://localhost:5000/authenticate?return_url=${encodeURIComponent(returnUrl)}`;
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to MURAL</h1>
        </div>
        <p className="App-intro">
          <a href={location}>
            <img src={button} className="Clickable" alt="Sign in with Facebook" />
          </a>
        </p>
      </div>
    );
  }  
}

export default App;