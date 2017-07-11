import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Key from './Key'


var pianoStyle = {
  width: "50%",
  height: 300,
  margin: "auto",
  borderRadius: "20px 20px 0 0",
  overflow: "hidden",
  background: "linear-gradient(#1e1d1d, #000)"
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={pianoStyle}>
          <div id="piano-container">
            <li>
              <Key color="white" note="C4" />
              <Key color="black" note="Db4" />
            </li>
            <li>
              <Key color="white" note="D4" />
              <Key color="black" note="Eb4" />
            </li>
            <li>
              <Key color="white" note="E4" />
            </li>
            <li>
              <Key color="white" note="F4" />
              <Key color="black" note="Gb4" />
            </li>
            <li>
              <Key color="white" note="G4" />
              <Key color="black" note="Ab4" />
            </li>
            <li>
              <Key color="white" note="A4" />
              <Key color="black" note="Bb4" />
            </li>
            <li>
              <Key color="white" note="B4" />
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
