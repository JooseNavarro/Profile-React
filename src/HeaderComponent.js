import React, {Component} from 'react';
import './App.css';

class nav extends Component {
  render(){
    return(
      <header>
        <nav className="nav_list">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="https://github.com/JooseNavarro">Github</a></li>
              <li><a href="https://about.me/joosenavarro">About Me</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default nav;
