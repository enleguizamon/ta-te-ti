import React from "react";
import "./style.css";
import Board from "../Board";
import Button from "react-bootstrap/Button";

class Game extends React.Component {
  constructor(props) {
    super(props);

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
      history: [],
    };
  }

  //Llega la jugada por Callback desde Board.
  handleCallback(move) {
    const { board, history } = this.state;

    const lastPlayer = move.player; //jugador
    const lastPosition = move.position; //posicion

    //llenar la jugada reciente en el tablero.
    const newBoard = [...board];

    //coloca en la posicion del tablero el value del jugador.
    newBoard[lastPosition] = lastPlayer;

    //agrega el board al historial.
    const newHistory = [...history];
    newHistory.push(newBoard);

    //retorna si hubo ganador
    const lastPlayerWon = this.calculateWinner(newBoard);

    //si el tablero esta lleno determina empate.
    const isBoardFull = this.checkIsBoardFull(newBoard);

    this.setState({
      board: newBoard,
      history: newHistory,
      winner: lastPlayerWon ? lastPlayer : "",
      gameIsEnded: lastPlayerWon || isBoardFull,
      currentPlayer: lastPlayer === "X" ? "O" : "X",
    });
  }

  calculateWinner(board) {
    return (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") || //primera fila
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") || //segunda fila
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") || //tercera fila
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") || //primera columna
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") || //segunda columna
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") || //tercera columna
      (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X") || //diagonal
      (board[2] === "O" && board[4] === "O" && board[6] === "O") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") || //diagonal
      (board[0] === "O" && board[4] === "O" && board[8] === "O")
    );
  }

  //chequea si el tablero está lleno.
  checkIsBoardFull(board) {
    const boxHasValue = (currentValue) => currentValue !== "";
    return board.every(boxHasValue);
  }

  //Recarga la pagina con el boton comenzar nuevo juego.
  refreshPage() {
    window.location.reload();
  }

  //boton para guardar el historial de tableros en history 
  //y setear en board un tablero del historial en el onClick.
  handleHistory(i) {
    const boardFromHistory = this.state.history[i];
    const newHistory = [...this.state.history];
    newHistory.length = i + 1;

    this.setState({
      board: boardFromHistory,
      history: newHistory,
    });
  }

  render() {
    const { winner, gameIsEnded, currentPlayer, board } = this.state;

    //conditional rendering para mostrar el mensaje de siguiente jugador, ganador o empate.
    let message;
    if (gameIsEnded && winner === "") {
      message = <h4>Empate</h4>;
    } else if (gameIsEnded) {
      message = <h4>El ganador es: {winner}</h4>;
    } else {
      message = <h4>Próximo jugador: {currentPlayer}</h4>;
    }

    //Se manda por props a Board el currentPlayer, currentBoard y gameIsEnded.
    return (
      <div className="gameContainer">
        <Button
          onClick={this.refreshPage}
          variant="secondary"
          size="sm"
          className="refreshButton"
        >
          Comenzar nuevo juego
        </Button>
        <Board
          currentPlayer={currentPlayer}
          currentBoard={board}
          handleCallback={(lastPlayer) => this.handleCallback(lastPlayer)}
          gameIsEnded={gameIsEnded}
        />
        <div className="aside">
          <div className="title">{message}</div>
          {/**El botón del historial de jugadas se deshabilita si el juego termino*/}
          <div className="historyContainer">
            {this.state.history.map((element, i) => {
              return (
                <Button
                  disabled={gameIsEnded}
                  key={i}
                  value={i}
                  onClick={() => this.handleHistory(i)}
                  variant="success"
                  size="sm"
                  className="historyButton"
                >
                  #ir a jugada: {i + 1}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
