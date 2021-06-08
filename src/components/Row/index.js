import React from 'react';
import "./style.css";
import Box from "../Box";

class Row extends React.Component {

  render() {

    const { fila } = this.props;
    return(
      

      <React.Fragment>
      <Box id={fila *3 + 0}  value=""/>
      <Box id={fila *3 + 1}/>
      <Box id={fila *3 + 2}/>
      </React.Fragment>
    )
  }
}

export default Row;