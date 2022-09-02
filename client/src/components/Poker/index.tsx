import { FC, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import api from "../../api";
import { UsernameContext } from "../../contexts/userContext";
import { EstimateCards } from "../EstimateCards";
import { ErrorMessage } from "../ErrorMessage";

export const Poker: FC = () => {
  const navigate = useNavigate();
  const { name } = useContext(UsernameContext);
  const roomId = useParams().roomId as string;

  const {
    data: room,
    isLoading,
    isError,
  } = useQuery(
    ["room", roomId],
    () => api.getRoom(roomId).then((resp) => resp.room),
    { refetchInterval: 5_000 }
  );

  useEffect(() => {
    if (!roomId) navigate(`/`);
    else if (!name) navigate(`/room/${roomId}/name`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, roomId]);

  return (
    <div>
      <h1>Scrum Poker</h1>
      {isLoading ? <p>Loading...</p> : null}
      {isError ? <ErrorMessage /> : null}
      {room ? (
        <>
          <p>
            Your Room ID: <code>{roomId}</code>
          </p>
          <p>
            Your Name: <code>{name}</code>
          </p>
          <EstimateCards />
          {/* todo: make it table */}
          <ul>
            {room?.users &&
              Object.values(room.users).map((user) => (
                <li key={`user-${user.name}`}>
                  {user.name} - {user.estimate}
                </li>
              ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};
