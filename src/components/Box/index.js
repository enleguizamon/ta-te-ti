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
  
  handleClick() {
    if(this.state.value === "X") {
      this.setState({value: "O"})
  } else {
    this.setState({value: "X"})
  }
}

  render() {
    const { id } = this.props;
    return (
      <Button
        onClick={() => this.handleClick()}
        variant="primary"
        size="lg"
        className="button"
      >{this.state.value}</Button>
    );
  }
}

export default Box;
