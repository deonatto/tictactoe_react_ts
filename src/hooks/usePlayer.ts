import { useEffect, useState } from "react";
import { SquareState } from "../components/Square/Types";

interface HookValues {
  player: string;
}

export default function useTurn(board: SquareState[]): HookValues {
  const [player, setPlayer] = useState("O");
  useEffect(() => {
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

  return { player };
}