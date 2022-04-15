import React from 'react'

export default class AppClass extends React.Component {
  
  state = {
    steps: 0,
    x: 2,
    y : 2,
    message: "",
    email: "",
    matrix: [
      ["", "", ""],
      ["", "B", ""],
      ["", "", ""],
    ],
  }

  getCoordinatesLeft(grid){
    return grid[this.state.x - 1][this.state.y]
  }

  // const [x, y] = getCoordinates(matrix)
  // console.log(`(${x}, ${y})`) // (1, 2)


  goLeft = () => {
    const updatedMatrix = [...this.state.matrix];
    this.setState({
      ...this.state,
      x: this.state.x - 1,
      steps: this.state.steps + 1,
      updatedMatrix: this.getCoordinatesLeft(this.state.updatedMatrix),
      matrix: updatedMatrix
    })
  }

  goUp = () => {

  }
  goRight = () => {

  }
  goDown = () => {

  }

  getCoordinatesLeft(grid){
    return grid[this.state.x - 1][this.state.y - 1]
  }


  render() {

    console.log(this.getCoordinatesLeft(this.state.matrix))
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          {this.state.matrix.flatMap(flatItem => flatItem).map((mapItem, index) => {
            return <div key={index} className={`square ${mapItem ? "active" : ""}`}>{mapItem}</div>
          })}
          {/* <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div> */}
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button onClick={() => this.goLeft()} id="left">LEFT</button>
          <button onClick={() => this.goUp()} id="up">UP</button>
          <button onClick={() => this.goRight()} id="right">RIGHT</button>
          <button onClick={() => this.goDown()}id="down">DOWN</button>

        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
