import { useState } from "react";

const TUNRS = {
  X: "❌",
  O: "⚪",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return <div className={className}>{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  // ver visualmente quien tiene el turno
  const [turn, setTurn] = useState(TUNRS.X);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TUNRS.X}>{TUNRS.X}</Square>
        <Square isSelected={turn === TUNRS.O}>{TUNRS.O}</Square>
      </section>
    </main>
  );
}

export default App;
