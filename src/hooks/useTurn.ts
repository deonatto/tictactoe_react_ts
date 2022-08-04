import { useEffect, useState } from "react";
import { SquareState } from "../components/Square/Types";

interface HookValues {
  result: { winner: string; state: string };
  player: string;
}

export default function useTurn(board: SquareState[]): HookValues {
  const [result, setResult] = useState({ winner: "none", state: "none" });
  //winning patterns
  const patterns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    //function to check if someone win
    const checkWinner = () => {
      let count = 0;
      let winner = false;
      //check if someone won
      patterns.forEach((pattern) => {
        const firstSquare = board[pattern[0]].value;
        const secondSquare = board[pattern[1]].value;
        const thirdSquare = board[pattern[2]].value;
        if (
          firstSquare === secondSquare &&
          firstSquare === thirdSquare &&
          firstSquare !== "" &&
          secondSquare !== "" &&
          thirdSquare !== ""
        ) {
          setResult({ winner: player, state: "Winner" });
          winner = true;
        }
      });
      // if no winner checks if it is a tie
      if (!winner) {
        //count all square that don´t have empty string
        board.forEach((item) => {
          if (item.value !== "") {
            count++;
          }
        });
        //check if it is a tie
        if (count === 9) {
          setResult({ winner: "none", state: "Tie" });
        }
      }
    };
    checkWinner();
    //function to alternate players
    const changePlayer = () => {
      if (player === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
    };
    changePlayer();
  }, [board]);

  return { result };
}
