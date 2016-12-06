import React, { Component } from 'react';
import { Buffer } from 'buffer';

class Authenticated extends Component {
  render() {
    const { location } = this.props;
    
    const info = 
      JSON.parse(new Buffer(decodeURIComponent(location.query.login), 'base64').toString('ascii'));

    return (
      <div className="App">
        <div className="App-header">
          <h1>Howdy, you're now Authenticated</h1>
        </div>
        
        <div><img className="Avatar" src={info.picture} alt={`${info.name} ${info.surname}`}/></div>
        <div>First Name: <strong>{info.name}</strong></div>
        <div>Last Name: <strong>{info.surname}</strong></div>
      </div>
    );
  }
}

export default Authenticated;