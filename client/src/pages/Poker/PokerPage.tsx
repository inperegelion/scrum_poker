/* eslint-disable  */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CopyUrlToClipboard } from "../../components/CopyUrlToClipboard";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EnterName } from "./EnterName";
import { Poker } from "./Poker";

export const PokerPage = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();

  const [roomId, setRoomId] = useLocalStorage("roomId");
  const [username] = useLocalStorage("username");

  console.log("🐝", roomId, username);

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
        Room ID: <code>{roomId ?? params.roomId}</code> <CopyUrlToClipboard />
      </p>
      {!username ? <EnterName /> : <Poker />}
    </div>
  );
};
