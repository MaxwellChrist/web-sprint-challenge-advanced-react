import React from 'react'

export default class AppClass extends React.Component {
  
  state = {
    spot: 4,
    steps: 0,
    x: 2,
    y : 2,
    message: "",
    email: "",
    matrix: [
      [""],[""],[""],
      [""],["B"],[""],
      [""],[""],[""],
    ],
  }

  handleChangesLeft = () => {
    this.setState({
      spot: this.state.spot - 1
    })
    if (this.state.spot == 0 || this.state.spot  == 3 || this.state.spot  == 6 ) {
      this.setState({
        ...this.state,
        message: "You can't go left",
      })
    } else {
        this.setState({
      ...this.state,
      matrix: this.getCoordinatesLeft(this.state.matrix),
      steps: this.state.steps + 1,
      x: this.state.x - 1,
      spot: this.state.spot - 1,
      message: "",
      })
    }
  }

  getCoordinatesLeft = (matrix) => {
    matrix[this.state.spot] = "";
    matrix[this.state.spot - 1] = "B"
    return matrix
  }

  handleChangesRight= () => {
    this.setState({
      spot: this.state.spot + 1
    })
    if (this.state.spot == 2 || this.state.spot  == 5 || this.state.spot  == 8 ) {
      this.setState({
        ...this.state,
        message: "You can't go right",
      })
    } else {
        this.setState({
      ...this.state,
      matrix: this.getCoordinatesRight(this.state.matrix),
      steps: this.state.steps + 1,
      x: this.state.x + 1,
      spot: this.state.spot + 1,
      message: "",
      })
    }
  }

  getCoordinatesRight = (matrix) => {
    matrix[this.state.spot] = "";
    matrix[this.state.spot + 1] = "B"
    return matrix
  }

  handleChangesUp = () => {
    this.setState({
      spot: this.state.spot - 3
    })
    if (this.state.spot == 0 || this.state.spot  == 1 || this.state.spot  == 2 ) {
      this.setState({
        ...this.state,
        message: "You can't go up",
      })
    } else {
        this.setState({
      ...this.state,
      matrix: this.getCoordinatesUp(this.state.matrix),
      steps: this.state.steps + 1,
      y: this.state.y - 1,
      spot: this.state.spot - 3,
      message: "",
      })
    }
  }

  getCoordinatesUp = (matrix) => {
    matrix[this.state.spot] = "";
    matrix[this.state.spot - 3] = "B"
    return matrix
  }

  handleChangesDown = () => {
    this.setState({
      spot: this.state.spot + 3
    })
    if (this.state.spot == 6 || this.state.spot  == 7 || this.state.spot  == 8 ) {
      this.setState({
        ...this.state,
        message: "You can't go down",
      })
    } else {
        this.setState({
      ...this.state,
      matrix: this.getCoordinatesDown(this.state.matrix),
      steps: this.state.steps + 1,
      y: this.state.y + 1,
      spot: this.state.spot + 3,
      message: "",
      })
    }
  }

  getCoordinatesDown = (matrix) => {
    matrix[this.state.spot] = "";
    matrix[this.state.spot + 3] = "B"
    return matrix
  }

  reset = () => {
    this.setState({
      spot: 4,
      steps: 0,
      x: 2,
      y : 2,
      message: "",
      email: "",
      matrix: [
        [""],[""],[""],
        [""],["B"],[""],
        [""],[""],[""],
      ],
    })
  }
  

  render() {
    console.log("This is the matrix:", this.state.matrix);
    console.log("This is the spot:", this.state.spot);

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
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={() => this.handleChangesLeft()} id="left">LEFT</button>
          <button onClick={() => this.handleChangesUp()} id="up">UP</button>
          <button onClick={() => this.reset()} id="reset">reset</button>
          <button onClick={() => this.handleChangesRight()} id="right">RIGHT</button>
          <button onClick={() => this.handleChangesDown()} id="down">DOWN</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
