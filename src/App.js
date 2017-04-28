import React, { Component } from 'react';
import './App.css';
const et = "</ Web Developer>";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://avatars0.githubusercontent.com/u/8741103?v=3&u=a3a59975b476cadfdeb8b3a41742e1cfae7b690d&s=400" className="App-img" alt="logo" />
          <h2>José Navarro</h2>
          <p>Full-Stack developer</p>
        </div>
        <p className="App-intro">
          Hey there, I’m Jose. HTML, CSS, JAVASCRIPT, Nodejs, MongoDB. {et} Trabajo Con ♥
        </p>
      </div>
    );
  }
}

export default App;
