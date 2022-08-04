import React from "react";
import { SquareState } from "./Types";
import './Square.css';

interface SquareProps {
  board: SquareState,
  squareHandler: (val:number) => void,
  changePlayer: () => void
}

const Square: React.FC<SquareProps> = ({board, squareHandler, changePlayer}) => {

  const onClickHandler = () =>{
    //avoid changing player value when user clicks on square that was previously clicked
    if (!board.checked) {
      squareHandler(board.number);
      changePlayer();
    }
  }
  return (
    <div className="row" onClick={onClickHandler}>
      {board.value === "X" ? (
        <i className="fa-solid fa-x"></i>
      ) : board.value === "O" ? (
        <i className="fa-solid fa-o"></i>
      ) : null}
    </div>
  );
};

export default Square;
