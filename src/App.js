
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
          <p>Use keyboard ↓ ↑ ← → to Join the numbers and get to 2048!<br /> 用上下左右方向键将相同的数字融合在一起得到2048！</p>
          <Board />
        </div>

      </div>
    );
  }
}

export default App;

