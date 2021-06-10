import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //valor que va a tener el casillero.
      currentValue: "",
      //la jugada tiene el jugador y la posicion.
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
        move: {
          player: currentPlayer,
          position: boxNumber,
        },
      },
      () => {
        //Devuelvo la jugada por callback a Row.
        this.props.handleCallback(this.state.move);
      }
    );
  }

  //de acuerdo al currentBoard renderizo el valor en el casillero.
  render() {
    const { boxNumber, currentPlayer, gameIsEnded, currentBoard } = this.props;

    return (
      <Button
        disabled={currentBoard[boxNumber] !== "" || gameIsEnded}
        onClick={() => this.handleClick(currentPlayer, boxNumber)}
        variant="primary"
        size="lg"
        className="button"
      >
        {currentBoard[boxNumber]}
      </Button>
    );
  }
}

export default Box;
