import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { Prev } from "react-bootstrap/esm/PageItem";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: this.props.currentBoard[this.props.boxNumber],
      boxIsFilled: false,
      move: {
        player: "",
        position: null,
      },
    };
  }

  //el segundo argumento, se ejecuta despues del setState para que sea sincronico.
  handleClick(currentPlayer, boxNumber) {
    this.setState(
      {
        currentValue: currentPlayer,
        boxIsFilled: true,
        move: {
          player: currentPlayer,
          position: boxNumber,
        },
      },
      () => {
        this.props.handleCallback(this.state.move);
      }
    );
  }

  // componentDidMount() {
  //   const { currentBoard, boxNumber } = this.props;
  //   this.setState({
  //     currentValue: currentBoard[boxNumber],
  //     boxIsFilled: currentBoard[boxNumber] !== "",
  //   });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   //console.log(this.props.boxNumber, this.state.currentValue, prevState.currentValue)
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.currentValue !== prevState.currentValue) {
  //     this.setState({currentValue: this.props.currentBoard[this.props.boxNumber]});
  //   }
  // }
  //Llega el valor del currentPlayer por props y lo renderizo en la casilla
  //creando un estado y modificandolo en el onClick.
  //Devuelvo la jugada por callback con el valor del jugador y el numero del casillero.
  render() {
    const { boxNumber, currentPlayer, gameIsEnded, currentBoard } = this.props;
    return (
      <Button
        disabled={ currentBoard[boxNumber] !== "" || gameIsEnded}
        onClick={() => this.handleClick(currentPlayer, boxNumber)}
        variant="primary"
        size="lg"
        className="button"
      >
        {/*{this.state.currentValue}*/}
        {currentBoard[boxNumber]}
      </Button>
    );
  }
}

export default Box;
