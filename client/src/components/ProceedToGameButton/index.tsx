import { FC } from "react";
import { Room } from "../../interfaces";
import api from "../../api";

interface Props {
  roomId: Room["_id"];
  name: string;
  callback: () => unknown;
}

export const ProceedToGameButton: FC<Props> = ({ roomId, name, callback }) => {
  async function addUser() {
    await api.addUserToRoom(roomId, name);
    callback();
  }

  return <button onClick={addUser}>GO</button>;
};
