import { useEffect, useState } from "react";
import { SquareState } from "../types/Types";
import {useAppDispatch} from '../redux/hooks';
import { usersActions } from '../redux/users';
import { Result } from "../types/Types"

interface HookReturn{
  result : Result,
  setResult: (val:Result)=> void
}

export default function useTurn(board: SquareState[]): HookReturn {
  const dispatch = useAppDispatch();
  const [result, setResult] = useState<Result>({ winner: "", state: "" });
  useEffect(() => {
    
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
          setResult({ winner: board[pattern[0]].value, state: "Winner" });
          dispatch(usersActions.addWin(board[pattern[0]].value));
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
          setResult({ winner: "", state: "Tie" });
        }
      }
    };
    checkWinner();
  }, [board, dispatch]);

  return {result, setResult} ;
}
