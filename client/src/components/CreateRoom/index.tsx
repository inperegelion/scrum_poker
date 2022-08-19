import { FC, useState } from "react";
import api from "../../api";

export const CreateRoom: FC = () => {
  const [roomId, setRoomId] = useState<string>();

  const handleCreateRoom = () => {
    api.createRoom().then((data) => setRoomId(data.room._id));
  };

  return (
    <div>
      <button onClick={handleCreateRoom}>Create a Room</button>
      <span>{roomId}</span>
    </div>
  );
};
