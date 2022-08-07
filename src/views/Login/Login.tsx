import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usersActions } from "../../redux/users";

const Login: React.FC = () => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const users = useAppSelector((state) => state.users);

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // reset state if user go back to login page whitout ending game
    if (users.length > 0) {
      dispatch(usersActions.clearState());
    }
    //dispatch action to store users on users state
    dispatch(usersActions.addPlayer(playerName1));
    dispatch(usersActions.addPlayer(playerName2));
    //send to home page
    history("/board");
  };
  return (
    <Wrapper>
      <form onSubmit={loginHandler} className="form-container">
        <div className="form-component">
          <label htmlFor="player1">Player X</label>
          <input
            type="text"
            className="player-input"
            id="player1"
            onChange={(e) => setPlayerName1(e.target.value)}
            required
            placeholder="Insert Player X name"
          />
        </div>
        <div className="form-component">
          <label htmlFor="player2">Player O</label>
          <input
            type="text"
            className="player-input"
            id="player2"
            onChange={(e) => setPlayerName2(e.target.value)}
            required
            placeholder="Insert Player O name"
          />
        </div>
        <button className="login-btn" type="submit">
          Start Game
        </button>
      </form>
    </Wrapper>
  );
};

export default Login;
