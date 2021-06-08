import React from 'react';
import "./style.css";
import Row from "../Row";

class Board extends React.Component {
  render() {
    return(
      <div className="rowsContainer">
        <div className="rowContainer">
      <Row fila="0"/>
      </div>
      <div className="rowContainer">
      <Row fila="1"/>
      </div>
      <div className="rowContainer">
      <Row fila="2"/>
      </div>
      </div>
    )
  }
}

export default Board;