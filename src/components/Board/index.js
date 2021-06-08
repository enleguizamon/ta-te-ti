import React from "react";
import "./style.css";
import Row from "../Row";

class Board extends React.Component {
  handleCallback(lastPlayer) {
    this.props.handleCallback(lastPlayer);
  }

  render() {
    return (
      <div className="rowsContainer">
        <div className="rowContainer">
          <Row
            fila="0"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          />
        </div>
        <div className="rowContainer">
          <Row
            fila="1"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          />
        </div>
        <div className="rowContainer">
          <Row
            fila="2"
            currentPlayer={this.props.currentPlayer}
            handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          />
        </div>
      </div>
    );
  }
}

export default Board;
