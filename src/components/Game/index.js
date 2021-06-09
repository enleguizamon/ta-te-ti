import React from "react";
import "./style.css";
import Board from "../Board";

class Game extends React.Component {
  constructor(props) {
    super(props);

    //El estado inicial tiene de atributos al jugador que tiene el turno, las jugadas, el tablero vacio y el ganador.
    this.state = {
      currentPlayer: "X",
      plays: [],
      board: Array(9).fill(''),
      winner: "",
      gameIsEnded: false
    };
  }

  //Llega la jugada por Callback desde Board.
  handleCallback(move) {
    const { plays, board, winner } = this.state;
    const lastPlayer = move.player; //jugador
    const lastValue = move.position; //posicion

    //llenar la jugada reciente en el tablero.
    const newBoard = board;
    //coloca en la posicion del tablero el value del jugador.
    newBoard[lastValue] = lastPlayer;

    this.setState({ board: newBoard });
    console.log(board);

    //compara y setea ganador.
    this.calculateWinner(board, lastPlayer, winner);

    //cambia el jugador.
    if (lastPlayer === "X") {
      this.setState({ currentPlayer: "O" });
    } else {
      this.setState({ currentPlayer: "X" });
    }

    //Se completa el array con las jugadas.
    this.setState({
      plays: [...plays, lastPlayer],
    });
  }


  calculateWinner(board, lastPlayer, winner) {
    if ((board[0] == "X" && board[1] == "X" && board[2] == "X") || //primera fila
      (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
      (board[3] == "X" && board[4] == "X" && board[5] == "X") || //segunda fila
      (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
      (board[6] == "X" && board[7] == "X" && board[8] == "X") || //tercera fila
      (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
      (board[0] == "X" && board[3] == "X" && board[6] == "X") || //primera columna
      (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
      (board[1] == "X" && board[4] == "X" && board[7] == "X") || //segunda columna
      (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
      (board[2] == "X" && board[5] == "X" && board[8] == "X") || //tercera columna
      (board[2] == "O" && board[5] == "O" && board[8] == "O") ||
      (board[2] == "X" && board[4] == "X" && board[6] == "X") || //diagonal
      (board[2] == "O" && board[4] == "O" && board[6] == "O") ||
      (board[0] == "X" && board[4] == "X" && board[8] == "X") || //diagonal
      (board[0] == "O" && board[4] == "O" && board[8] == "O")) {
      this.setState({ winner: lastPlayer, gameIsEnded: true });
      console.log(winner);
    }
  }

  render() {
    const { winner, gameIsEnded, currentPlayer } = this.state;

    //conditional rendering para mostrar jugador o ganador.
    let shouldPlay;
    if (gameIsEnded) {
      shouldPlay = <h4>El ganador es: {winner}</h4>;
    } else {
      shouldPlay = <h4>Próximo jugador: {currentPlayer}</h4>;
    }

    //Se manda en currentPlayer a Board por props.
    return (
      <div className="gameContainer">
        <Board
          currentPlayer={currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          gameIsEnded={gameIsEnded}
        />
        <div className="title">{shouldPlay}</div>
      </div>
    );
  }
}

export default Game;
