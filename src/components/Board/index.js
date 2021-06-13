import React from "react";
import "./style.css";
import Row from "../Row";

class Board extends React.Component {
  //Llega la jugada por Callback desde Row y se manda a Game.
  handleCallback(move) {
    this.props.handleCallback(move);
  }

  //Se manda por props a Row el currentPlayer, currentBoard, gameIsEnded 
  //y se agrega row con el numero de fila. 
  render() {
    const { gameIsEnded, currentPlayer, currentBoard } = this.props;

    return (
      <div className="rowsContainer">
        <div className="rowContainer">
          <Row
            row="0"
            currentPlayer={currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
            currentBoard={currentBoard}
          />
        </div>
        <div className="rowContainer">
          <Row
            row="1"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
            currentBoard={currentBoard}
          />
        </div>
        <div className="rowContainer">
          <Row
            row="2"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
            currentBoard={currentBoard}
          />
        </div>
      </div>
    );
  }
}

export default Board;
