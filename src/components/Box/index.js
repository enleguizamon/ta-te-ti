import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  //Llega el valor del currentPlayer por props y lo renderizo en la casilla
  //creando un estado y modificandolo en el onClick.
  //Devuelvo la jugada por callback con el valor del jugador y el numero del casillero.
  render() {
    const { boxNumber, currentPlayer, gameIsEnded } = this.props;
   
    return (
      <Button
        disabled={this.state.boxIsFilled || gameIsEnded}
        onClick={() => this.handleClick(currentPlayer, boxNumber)}
        variant="primary"
        size="lg"
        className="button"
      >
        {this.state.move.player}
      </Button>
    );
  }
}

export default Box;
