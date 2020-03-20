import React, { Component } from "react";
import './Board.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ]
            ],
            gen: true,
            curScore: 0,
            bestScore: 0,
            gameOver: false
        };
    }

    randomGenTwice() {
        //change a random 0 to 2/4
        let a = [];
        let b = [];
        let temp_d = this.state.data;
        for (var i = 0; i < temp_d.length; i++) {
            for (var j = 0; j < temp_d[0].length; j++) {
                // console.log(temp_d[i][j]);
                if (temp_d[i][j] === 0) {
                    a.push(i);
                    b.push(j);
                }
            }
        }
        if (a.length == 0) {
            return;
        } else if (a.length == 1) {
            temp_d[a[0]][b[0]] = 2;
            this.setState({ data: temp_d });
        } else {    //a.length >= 2
            let ranIndex1 = getRandomInt(a.length);
            let ranIndex2 = getRandomInt(a.length);
            if (ranIndex2 === ranIndex1) {
                ranIndex2 = getRandomInt(a.length);
            }
            temp_d[a[ranIndex1]][b[ranIndex1]] = 2;
            temp_d[a[ranIndex2]][b[ranIndex2]] = 2;
            this.setState({ data: temp_d });
        }

        //this.forceUpdate();
    }
    componentDidMount() {
        this.randomGenTwice()
        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    onKeyDown = (e) => {
        e.preventDefault();
        if (e.which === 40) { //go down
            this.setState({
                data: this.goVertical(this.state.data, 0)
            })
            this.randomGenTwice()
        } else if (e.which === 38) { // go up
            this.setState({
                data: this.goVertical(this.state.data, 1)
            })
            this.randomGenTwice()
        } else if (e.which === 39) { // go right
            this.setState({
                data: this.goHori(this.state.data, 0)
            })
            this.randomGenTwice()
        } else if (e.which === 37) { // go left
            this.setState({
                data: this.goHori(this.state.data, 1)
            })
            this.randomGenTwice()
        }

        /*var temp_s = this.state.data.reduce(function(a,b) { return a.concat(b) }) // flatten array
            .reduce(function(a,b) { return a + b });
        this.setState({score: temp_s});*/
        console.log(this.state.curScore);
    }

    goVertical = (arrOfArr, dir) => {
        return arrOfArr.map((item, i) => this.reduceZero(item, dir))
    }

    goHori = (arrOfArr, dir) => {
        arrOfArr = arrOfArr[0].map((col, i) => arrOfArr.map(row => row[i]));
        arrOfArr = arrOfArr.map((item, i) => this.reduceZero(item, dir))
        arrOfArr = arrOfArr[0].map((col, i) => arrOfArr.map(row => row[i]));
        return arrOfArr
    }

    reduceZero = (arr, dir) => {
        var arr = arr.filter((item) => item !== 0)
        var n_arr = [];
        // sum repeated num
        if (dir === 0) {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === arr[i - 1]) {
                    n_arr.push(arr[i] * 2)
                    let temp_s = this.state.curScore + (arr[i] * 2)
                    //update score
                    this.setState({ curScore: temp_s })
                    i--

                } else {
                    n_arr.push(arr[i]);
                }
            }
            arr = n_arr.reverse()
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === arr[i + 1]) {
                    n_arr.push(arr[i] * 2)
                    let temp_s = this.state.curScore + (arr[i] * 2)
                    this.setState({ curScore: temp_s })
                    i++
                } else {
                    n_arr.push(arr[i]);
                }
            }
            arr = n_arr
        }
        // fill in zero
        var lenZero = 4 - arr.length;
        var arrZero = []
        while (lenZero != 0) {
            arrZero.push(0)
            lenZero--
        }
        return dir === 0 ? [...arrZero, ...arr] : [...arr, ...arrZero]
    }

    randomGenOnce() {
        //change a random 0 to 2/4
        let a = [];
        let b = [];
        let temp_d = this.state.data;
        for (var i = 0; i < temp_d.length; i++) {
            for (var j = 0; j < temp_d[0].length; j++) {
                console.log(temp_d[i][j]);
                if (temp_d[i][j] === 0) {
                    a.push(i);
                    b.push(j);
                }
            }
        }
        if (a.length == 0) {
            return;
        }
        let ranIndex = getRandomInt(a.length);
        temp_d[a[ranIndex]][b[ranIndex]] = 2;
        this.setState({ data: temp_d });
        this.setState({ genCount: this.state.genCount + 1 });
        //this.forceUpdate();
    }

    restart = () => {
        this.setState({
            gameOver: false,
            data: [
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ]
            ]
        })
        this.randomGenTwice()
        if (this.state.bestScore < this.state.curScore) {
            this.setState({
                bestScore: this.state.curScore
            })
        }
    }

    render() {
        let gameOver = (
            <div class="game-message game-over">
                <p >Game over!</p>
                <div class="lower" >
                    <a class="retry-button" onClick={this.restart}>Try again</a></div></div>
        )
        return (
            <div className="game-container">
                <div class="scores-container" >
                    <div class="score-container" >{this.state.curScore}</div>
                    <span >&nbsp;</span>
                    <div class="best-container" >{this.state.bestScore}</div></div>
                {this.state.gameOver ? gameOver : null}
                <div className="board">
                    {/* <button onClick={() => { this.randomGenTwice() }}>RandomGen</button> */}
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
                                return <div>{item.map((it, j) => {
                                    if (it !== 0) return <div className={"tile tile-" + it + " tile-position-" + (i + 1) + "-" + (j + 1)} >
                                        <div className="tile-inner">{it}</div></div>
                                })}</div>
                            })
                        }
                    </div>

                </div></div>


        );
    }
}

export default Board;
