import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { RoomContext } from "../../contexts/roomContext";

export const CreateRoomButton: FC = () => {
  const { setRoom } = useContext(RoomContext);
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    const response = await api.createRoom();
    setRoom(response.room);
    navigate(`room/${response.room._id}/name`);
  };

  return <button onClick={handleCreateRoom}>Create a Room</button>;
};
