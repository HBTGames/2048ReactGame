import React, { Component } from "react";
import './Board.css';



class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                [
                    0,
                    128,
                    0,
                    8
                ],
                [
                    2,
                    0,
                    0,
                    0
                ],
                [
                    64,
                    2,
                    0,
                    0
                ],
                [
                    2,
                    0,
                    0,
                    4
                ]
            ]

        };
    }



    render() {

        return (

            <div className="board">
                <div className="grid-container" >
                    <div className="grid-row" >
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                    </div><div className="grid-row" >
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell"></div>
                    </div>
                    <div className="grid-row" >
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                        <div className="grid-cell" ></div>
                    </div><div className="grid-row">
                        <div className="grid-cell" >
                        </div><div className="grid-cell" >
                        </div><div className="grid-cell" >
                        </div><div className="grid-cell" >
                        </div>
                    </div>
                </div>

                <div className="tile-container">



                    {

                        this.state.data.map((item, i) => {
                            return <div>
                                {item.map((it, j) => {
                                    if (it !== 0)
                                        return <div className={"tile tile-" + it + " tile-position-" + (i + 1) + "-" + (j + 1)}>
                                            <div className="tile-inner">{it}</div></div>
                                })}
                            </div>


                        })

                    }






                </div>

            </div>

        );
    }
}

export default Board;
