import React from "react";
import "./style.css";
import Box from "../Box";

class Row extends React.Component {
  //Llega la jugada por Callback desde Box.
  handleCallback(move) {
    this.props.handleCallback(move);
  }

  //Se manda en currentPlayer a Box.
  render() {
    const { row, gameIsEnded, currentBoard } = this.props;
    return (
      <React.Fragment>
        <Box
          boxNumber={row * 3 + 0}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(move) => this.handleCallback(move)}
          gameIsEnded={gameIsEnded}
          currentBoard={currentBoard}
        />
        <Box
          boxNumber={row * 3 + 1}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(move) => this.handleCallback(move)}
          gameIsEnded={gameIsEnded}
          currentBoard={currentBoard}
        />
        <Box
          boxNumber={row * 3 + 2}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(move) => this.handleCallback(move)}
          gameIsEnded={gameIsEnded}
          currentBoard={currentBoard}
        />
      </React.Fragment>
    );
  }
}

export default Row;
