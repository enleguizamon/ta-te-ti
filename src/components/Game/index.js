import React from "react";
import "./style.css";
import Board from "../Board";
import Button from "react-bootstrap/Button";

class Game extends React.Component {
  constructor(props) {
    super(props);

    //El estado inicial tiene de atributos al jugador que tiene el turno, las jugadas, el tablero vacio y el ganador.
    this.state = {
      //turno del jugador
      currentPlayer: "X",
      //estado del tablero
      board: Array(9).fill(""),
      //nombre del ganador X o O
      winner: "",
      //flag para determinar si termino el juego
      gameIsEnded: false,
      //historial de jugadas(array de boards)
      history: []
    };
  }

  //Llega la jugada por Callback desde Board.
  handleCallback(move) {
    const { plays, board, winner, history } = this.state;
    const lastPlayer = move.player; //jugador
    const lastValue = move.position; //posicion

    //llenar la jugada reciente en el tablero.
    const newBoard = board;
    //coloca en la posicion del tablero el value del jugador.
    newBoard[lastValue] = lastPlayer;

    //Actualiza el board y agrega el board al historial.
    this.setState({ board: newBoard, history: [...history, newBoard] });

    //compara y setea ganador.
    this.calculateWinner(board, lastPlayer, winner);
    //si el tablero esta lleno determina empate.
    this.checkTie();

    //cambia el jugador.
    if (lastPlayer === "X") {
      this.setState({ currentPlayer: "O" });
    } else {
      this.setState({ currentPlayer: "X" });
    }
  }

  calculateWinner(board, lastPlayer, winner) {
    if (
      (board[0] == "X" && board[1] == "X" && board[2] == "X") || //primera fila
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
      (board[0] == "O" && board[4] == "O" && board[8] == "O")
    ) {
      //Si hubo ganador se setea el ganador y termina el juego.
      this.setState({ winner: lastPlayer, gameIsEnded: true });
    }
  }

  checkTie() {
    const { board, gameIsEnded } = this.state;

    const boxHasValue = (currentValue) => currentValue != "";
    if (board.every(boxHasValue) && !gameIsEnded) {
      this.setState({ winner: "", gameIsEnded: true });
    }
  }

  //Recarga la pagina con el boton comenzar nuevo juego.
  refreshPage() {
    window.location.reload();
  }

  render() {
    console.log(this.state.history)
    const { winner, gameIsEnded, currentPlayer } = this.state;

    //conditional rendering para mostrar siguiente jugador, ganador o empate.
    let message;
    if (gameIsEnded && winner == "") {
      message = <h4>Empate</h4>;
    } else if (gameIsEnded) {
      message = <h4>El ganador es: {winner}</h4>;
    } else {
      message = <h4>Próximo jugador: {currentPlayer}</h4>;
    }

    //Se manda en currentPlayer a Board por props.
    return (
      <div className="gameContainer">
        <Button onClick={this.refreshPage} variant="secondary"
        size="sm" className="refreshButton">Comenzar nuevo juego</Button>
        <Board
          currentPlayer={currentPlayer}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          gameIsEnded={gameIsEnded}
        />
        <div className="aside">
        <div className="title">{message}</div>
        <div className="historyContainer">
        {this.state.history.map((element, i, arr) => {
          return <Button variant="success"
          size="sm" className="historyButton">#ir a jugada: {i}</Button>
        })}
        </div>
        </div>
      </div>
    );
  }
}

export default Game;
