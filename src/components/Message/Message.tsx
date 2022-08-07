import React from "react";
import "./Message.css";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { usersActions } from "../../redux/users";
import { useNavigate } from "react-router-dom";
import { Result } from "../../types/Types";

interface MessageProps {
  result: Result;
  restartGame: () => void;
}

const Message: React.FC<MessageProps> = ({ result, restartGame }) => {
  //get users state
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const history = useNavigate();

  //end game and send back to login page
  const endGame = () => {
    dispatch(usersActions.endGame());
    history("/");
  };
  return (
    <div className="message-container">
      <p className="message">
        {result.winner === "X"
          ? `Winner: ${users[0].name}`
          : result.winner === "O"
          ? `Winner: ${users[1].name}`
          : "It is a Tie"}
      </p>
      <p className="message">{`Player ${users[0].name} won ${users[0].wins} times`}</p>
      <p className="message">{`Player ${users[1].name} won ${users[1].wins} times`}</p>
      <button className="btn restart-btn" onClick={restartGame}>
        Restar Game
      </button>
      <button className="btn end-btn" onClick={endGame}>
        End Game
      </button>
    </div>
  );
};

export default Message;
