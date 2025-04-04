import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontais
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticais
      [0, 4, 8], [2, 4, 6]             // diagonais
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    return null;
  };
  
  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  
  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }
    
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };
  
  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isBoardFull) {
    status = 'Empate!';
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game-container">
      <h2>Jogo da Velha</h2>
      <div className="status">{status}</div>
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>
        Recomeçar
      </button>
    </div>
  );
}

export default TicTacToe;