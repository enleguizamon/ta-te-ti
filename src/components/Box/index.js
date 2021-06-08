import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  //el segundo argumento, se ejecuta después del setState para que sea sincrónico.
  handleClick(currentPlayer) {
    this.setState({value: currentPlayer}, () => {
      this.props.handleCallback(this.state.value);
    });
    
    /*if(this.state.value === "X") {
      this.setState({value: "O"})
  } else {
    this.setState({value: "X"})
  }*/
}

  render() {
    const { id, currentPlayer } = this.props;
    return (
      <Button
        onClick={() => this.handleClick(currentPlayer)}
        variant="primary"
        size="lg"
        className="button"
      >{this.state.value}</Button>
    );
  }
}

export default Box;
