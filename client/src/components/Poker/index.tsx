import { FC, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../api";
import { RoomContext } from "../../contexts/roomContext";
import { UsernameContext } from "../../contexts/userContext";
import { EstimateCards } from "../EstimateCards";

export const Poker: FC = () => {
  const navigate = useNavigate();
  const { name } = useContext(UsernameContext);
  const { room, setRoom } = useContext(RoomContext);
  const roomId = useParams().roomId as string;

  async function refreshRoomData() {
    const { room } = await api.getRoom(roomId);
    setRoom(room);
  }

  useEffect(() => {
    if (!roomId) navigate(`/`);
    else if (!name) navigate(`/room/${roomId}/name`);
    else refreshRoomData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, roomId]);

  console.log(room.users);

  return (
    <div>
      <h1>
        Scrum Poker{" "}
        <span>
          <button onClick={refreshRoomData}>🔄</button>
        </span>
      </h1>
      <p>
        Your Room ID: <code>{roomId}</code>
      </p>
      <p>
        Your Name: <code>{name}</code>
      </p>
      <EstimateCards />
      <button onClick={refreshRoomData}>🔄</button>
      <ul>
        {room?.users &&
          Object.values(room.users).map((user) => (
            <li key={`user-${user.name}`}>
              {user.name} - {user.estimate}
            </li>
          ))}
      </ul>
    </div>
  );
};
