import React, { Component } from "react";
import './Board.css';



class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {

        return (

            <div className="board">
                <div class="grid-container" >
                    <div class="grid-row" >
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                    </div><div class="grid-row" >
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell"></div>
                    </div>
                    <div class="grid-row" >
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                        <div class="grid-cell" ></div>
                    </div><div class="grid-row">
                        <div class="grid-cell" >
                        </div><div class="grid-cell" >
                        </div><div class="grid-cell" >
                        </div><div class="grid-cell" >
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Board;
