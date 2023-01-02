/* eslint-disable  */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../api";
import { CopyUrlToClipboard } from "../../components/CopyUrlToClipboard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useSessionStorage } from "../../hooks/useLocalStorage";

import { EnterName } from "./EnterName";
import { Poker } from "./Poker";

export const PokerPage = (): JSX.Element => {
  const params = useParams();
  const [isRoomExist, setIsRoomExist] = useState<boolean>(true);

  const [roomId, setRoomId] = useSessionStorage("roomId");
  const [userId] = useSessionStorage("userId");

  useQuery(["room", params.roomId], () => api.getRoom(params.roomId ?? ""), {
    onError(err) {
      if (err === 404) setIsRoomExist(false);
    },
  });
  useEffect(() => {
    if (!roomId) {
      if (params.roomId) {
        setRoomId(params.roomId);
      }
    }
  }, [roomId]);

  console.log("PokerPage", { roomId, userId });

  return (
    <div>
      <h1>Scrum Poker</h1>
      <p>
        Room ID: <code>{params.roomId}</code> <CopyUrlToClipboard />
      </p>
      <ErrorMessage isError={!isRoomExist} message="Room no longer exist" />
      {!userId ? <EnterName /> : <Poker />}
    </div>
  );
};
