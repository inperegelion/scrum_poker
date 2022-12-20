/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from "../../contexts/userContext";
import { EnterName } from "./EnterName";
import { Poker } from "./Poker";

export const PokerPage = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomId, setRoomId, username } = useContext(AppContext);

  useEffect(() => {
    if (!roomId) {
      if (params.roomId) {
        setRoomId(params.roomId);
      } else {
        navigate("/");
      }
    }
  }, [roomId, params]);

  return (
    <div>
      <h1>Scrum Poker</h1>
      <p>
        Your Room ID: <code>{roomId ?? params.roomId}</code>
      </p>
      {!username ? <EnterName /> : <Poker />}
    </div>
  );
};
