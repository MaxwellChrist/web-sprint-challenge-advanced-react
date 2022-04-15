import React, { useState } from 'react';
import axios from 'axios';

export default function AppFunctional(props) {

  const [state, setState] = useState({
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

  const inputChange = (event) => {
    setState({
      ...state,
      email: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    postRequest();
    const clear = document.getElementById("email");
    clear.value = ""
  }

  const postRequest = () => {
    const newRequest = {
      x: state.x,
      y: state.y,
      steps: state.steps,
      email: state.email
    }
    axios.post("http://localhost:9000/api/result", newRequest)
    .then(res => {
      console.log(res.data.message)
      setState({
        ...state,
        message: res.data.message,
      })
    })
    .catch(err => {
      console.log(err)
      console.log(err)
      setState({
        ...state,
        message: "Ouch: email is required",
      })
    })
  }


  const handleChangesLeft = () => {
    setState({
      spot: state.spot - 1
    })
    if (state.spot == 0 || state.spot  == 3 || state.spot  == 6 ) {
      setState({
        ...state,
        message: "You can't go left",
      })
    } else {
        setState({
      ...state,
      matrix: getCoordinatesLeft(state.matrix),
      steps: state.steps + 1,
      x: state.x - 1,
      spot: state.spot - 1,
      message: "",
      })
    }
  }

  const getCoordinatesLeft = (matrix) => {
    matrix[state.spot] = "";
    matrix[state.spot - 1] = "B"
    return matrix
  }

  const handleChangesRight= () => {
    setState({
      spot: state.spot + 1
    })
    if (state.spot == 2 || state.spot  == 5 || state.spot  == 8 ) {
      setState({
        ...state,
        message: "You can't go right",
      })
    } else {
        setState({
      ...state,
      matrix: getCoordinatesRight(state.matrix),
      steps: state.steps + 1,
      x: state.x + 1,
      spot: state.spot + 1,
      message: "",
      })
    }
  }

  const getCoordinatesRight = (matrix) => {
    matrix[state.spot] = "";
    matrix[state.spot + 1] = "B"
    return matrix
  }

  const handleChangesUp = () => {
    setState({
      spot: state.spot - 3
    })
    if (state.spot == 0 || state.spot  == 1 || state.spot  == 2 ) {
      setState({
        ...state,
        message: "You can't go up",
      })
    } else {
        setState({
      ...state,
      matrix: getCoordinatesUp(state.matrix),
      steps: state.steps + 1,
      y: state.y - 1,
      spot: state.spot - 3,
      message: "",
      })
    }
  }

  const getCoordinatesUp = (matrix) => {
    matrix[state.spot] = "";
    matrix[state.spot - 3] = "B"
    return matrix
  }

  const handleChangesDown = () => {
    setState({
      spot: state.spot + 3
    })
    if (state.spot == 6 || state.spot  == 7 || state.spot  == 8 ) {
      setState({
        ...state,
        message: "You can't go down",
      })
    } else {
        setState({
      ...state,
      matrix: getCoordinatesDown(state.matrix),
      steps: state.steps + 1,
      y: state.y + 1,
      spot: state.spot + 3,
      message: "",
      })
    }
  }

  const getCoordinatesDown = (matrix) => {
    matrix[state.spot] = "";
    matrix[state.spot + 3] = "B"
    return matrix
  }

  const reset = () => {
    setState({
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

  return (
    <div id="wrapper" className={props.className}>
 <div className="info">
          <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
          <h3 id="steps">You moved {state.steps} time{state.steps == 1 ? "" : "s"}</h3>
        </div>
        <div id="grid">
          {state.matrix.flatMap(flatItem => flatItem).map((mapItem, index) => {
            return <div key={index} className={`square ${mapItem ? "active" : ""}`}>{mapItem}</div>
          })}
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={() => handleChangesLeft()} id="left">LEFT</button>
          <button onClick={() => handleChangesUp()} id="up">UP</button>
          <button onClick={() => reset()} id="reset">reset</button>
          <button onClick={() => handleChangesRight()} id="right">RIGHT</button>
          <button onClick={() => handleChangesDown()} id="down">DOWN</button>
        </div>
        <form onSubmit={onSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={inputChange}></input>
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
