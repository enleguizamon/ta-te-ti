import React from "react";
import "./style.css";
import Box from "../Box";

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCallback(data) {
    console.log(data);
  }

  render() {
    const { fila } = this.props;
    return (
      <React.Fragment>
        <Box
          id={fila * 3 + 0}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(data) => this.handleCallback(data)}
        />
        <Box
          id={fila * 3 + 1}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(data) => this.handleCallback(data)}
        />
        <Box
          id={fila * 3 + 2}
          currentPlayer={this.props.currentPlayer}
          handleCallback={(data) => this.handleCallback(data)}
        />
      </React.Fragment>
    );
  }
}

export default Row;
