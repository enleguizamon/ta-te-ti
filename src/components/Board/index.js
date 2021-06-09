import React from "react";
import "./style.css";
import Row from "../Row";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  //Llega la jugada por Callback desde Row.
  handleCallback(move) {
    this.props.handleCallback(move);
  }

  //Se manda en currentPlayer a Row. 
  render() {
    const { gameIsEnded, currentPlayer } = this.props;

    return (
      <div className="rowsContainer">
        <div className="rowContainer">
          <Row
            row="0"
            currentPlayer={currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
          />
        </div>
        <div className="rowContainer">
          <Row
            row="1"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
          />
        </div>
        <div className="rowContainer">
          <Row
            row="2"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(move) => this.handleCallback(move)}
            gameIsEnded={gameIsEnded}
          />
        </div>
      </div>
    );
  }
}

export default Board;
