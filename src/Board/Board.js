import React, { Component } from "react";
import './Board.css';



class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                [
                    2,
                    4,
                    0,
                    8
                ],
                [
                    2,
                    2,
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
                    2,
                    0,
                    0
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
                        // for (var i = 0; i < this.state.data.length; i++){
                        //     for (var j = 0; j < item.length; j++) {
                        //         return <div className={"tile tile-" + item[j] + " tile-position-" + (i + 1) + "-" + (j + 1)}>
                        //             <div className="tile-inner">{item[j]}</div></div>
                        //     }
                        // }




                        this.state.data.map((item, i) => {
                            //document.write(i)

                            return <div><div className={"tile tile-" + item[0] + " tile-position-" + (i + 1) + "-" + (1)}>
                                <div className="tile-inner">{item[0]}</div></div>
                                <div className={"tile tile-" + item[1] + " tile-position-" + (i + 1) + "-" + (2)}>
                                    <div className="tile-inner">{item[1]}</div></div>
                                <div className={"tile tile-" + item[2] + " tile-position-" + (i + 1) + "-" + (3)}>
                                    <div className="tile-inner">{item[2]}</div></div>
                                <div className={"tile tile-" + item[3] + " tile-position-" + (i + 1) + "-" + (4)}>
                                    <div className="tile-inner">{item[3]}</div></div></div>

                        })

                    }






                </div>

            </div>

        );
    }
}

export default Board;
