import React from 'react'

export default class AppClass extends React.Component {
  
  state = {
    turnCount: 0,
    x: 2,
    y : 2,
    message: "",
    email: "",
    matrix: [
      ["", "", ""],
      ["", "B", ""],
      ["", "", ""],
    ]
  }


  render() {

    console.log(this.state.matrix);
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.turnCount} times</h3>
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
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
