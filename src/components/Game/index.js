import React from "react";
import "./style.css";
import Board from "../Board";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: "X"
    };
  }



  render() {
    return (
      <div className="gameContainer">
        <Board currentPlayer={this.state.currentPlayer} />
        <div className="title">
          <h4>Siguiente jugador: </h4>
        </div>
      </div>
    );
  }
}

export default Game;
