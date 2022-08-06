import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Login.css";
import { useDispatch } from "react-redux";
import { usersActions } from "../../redux/users";

const Login: React.FC = () => {
  const [playerName1, setPlayerName1] = useState('');
  const [playerName2, setPlayerName2] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <label htmlFor="player1">Player 1</label>
          <input
            type="text"
            className="player-input"
            id="player1"
            onChange={(e) => setPlayerName1(e.target.value)}
            required
            placeholder="Insert Player 1 name"
          />
        </div>
        <div className="form-component">
          <label htmlFor="player2">Player 2</label>
          <input
            type="text"
            className="player-input"
            id="player2"
            onChange={(e) => setPlayerName2(e.target.value)}
            required
            placeholder="Insert Player 2 name"
          />
        </div>
        <div className="login-btn-container">
          <button className="login-btn" type="submit">
            Start Game
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
