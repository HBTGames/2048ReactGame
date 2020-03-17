
import React, { Component } from "react";
import './App.css';
import Board from "./Board/Board.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="App">
        <div className="pg">
          <h1>2048</h1>
          <p>Join the numbers and get to 2048!</p>
          <Board />
        </div>

      </div>
    );
  }
}

export default App;

