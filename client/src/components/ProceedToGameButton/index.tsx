import { FC } from "react";
import { Room } from "../../interfaces";
import api from "../../api";

interface Props {
  roomId: Room["_id"];
  name: string;
}

export const ProceedToGameButton: FC<Props> = ({ roomId, name }) => {
  function addUser() {
    api.addUserToRoom(roomId, name);
  }

  return <button onClick={addUser}>GO</button>;
};
