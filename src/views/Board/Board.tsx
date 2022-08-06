import { useState} from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Square from "../../components/Square/Square";
import Message from "../../components/Message/Message";
import "./Board.css";
import { SquareState } from "../../types/Types";
import useTurn from "../../hooks/useTurn";

const Board: React.FC = () => {
  const [player, setPlayer] = useState("");
  //board state
  const [board, setBoard] = useState<SquareState[]>([
    { value: "", number: 0, checked: false },
    { value: "", number: 1, checked: false },
    { value: "", number: 2, checked: false },
    { value: "", number: 3, checked: false },
    { value: "", number: 4, checked: false },
    { value: "", number: 5, checked: false },
    { value: "", number: 6, checked: false },
    { value: "", number: 7, checked: false },
    { value: "", number: 8, checked: false },
  ]);
  const result  = useTurn(board);

  //function to alternate players
  const changePlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };
  //update board state every time user clicks square
  const squareHandler = (squareIndex: number) => {
    setBoard((prevState) => {
      const newState = prevState.map((obj, index) => {
        //update square values
        if (squareIndex === index) {
          obj.value = player;
          obj.number = squareIndex;
          obj.checked = true;
          return obj;
        } else {
          return obj;
        }
      });
      return newState;
    });
  };

  //restart game function
  const restartGame = () => {
    setBoard([
      { value: "", number: 0, checked: false },
      { value: "", number: 1, checked: false },
      { value: "", number: 2, checked: false },
      { value: "", number: 3, checked: false },
      { value: "", number: 4, checked: false },
      { value: "", number: 5, checked: false },
      { value: "", number: 6, checked: false },
      { value: "", number: 7, checked: false },
      { value: "", number: 8, checked: false },
    ]);
    setPlayer("O");
  };

  return (
    <Wrapper>
      {result.state !== "" && (
        <Message result={result} restartGame={restartGame} />
      )}
      <div className="board-container">
        <div className="column">
          <Square
            board={board[0]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[3]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[6]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
        </div>
        <div className="column">
          <Square
            board={board[1]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[4]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[7]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
        </div>
        <div className="column">
          <Square
            board={board[2]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[5]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
          <Square
            board={board[8]}
            squareHandler={squareHandler}
            changePlayer={changePlayer}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Board;
