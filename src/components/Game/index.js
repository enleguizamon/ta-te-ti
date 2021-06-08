import React from "react";
import "./style.css";
import Board from "../Board";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: "X",
    };
  }

  handleCallback(lastPlayer) {
    if(lastPlayer === "X") {
      this.setState({currentPlayer: "O"})
    } else {
      this.setState({currentPlayer: "X"})
    }
  }

  render() {
    return (
      <div className="gameContainer">
        <Board
          currentPlayer={this.state.currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
        />
        <div className="title">
          <h4>Siguiente jugador: {this.state.currentPlayer}</h4>
        </div>
      </div>
    );
  }
}

export default Game;
