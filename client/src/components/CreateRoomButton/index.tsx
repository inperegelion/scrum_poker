import { FC, useContext } from "react";
import api from "../../api";
import { RoomContext } from "../../contexts/roomContext";

export const CreateRoomButton: FC = () => {
  const { setRoom } = useContext(RoomContext);

  const handleCreateRoom = async () => {
    const response = await api.createRoom();
    setRoom(response.room);
  };

  return <button onClick={handleCreateRoom}>Create a Room</button>;
};
