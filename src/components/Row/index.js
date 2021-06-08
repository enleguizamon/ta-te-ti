import React from "react";
import "./style.css";
import Box from "../Box";

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCallback(lastPlayer) {
    this.props.handleCallback(lastPlayer);
  }

  render() {
    const { fila } = this.props;
    return (
      <React.Fragment>
        <Box
          id={fila * 3 + 0}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
        />
        <Box
          id={fila * 3 + 1}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
        />
        <Box
          id={fila * 3 + 2}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
        />
      </React.Fragment>
    );
  }
}

export default Row;
