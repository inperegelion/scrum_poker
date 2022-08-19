import { API_URI } from "../constants";
import { RoomResponse, Room } from "../interfaces";

const createRoom = async (): Promise<RoomResponse> => {
  const options = { method: "POST" };
  const response = await fetch(`${API_URI}/room`, options);
  const data = await response.json();
  return data;
};

const addUserToRoom = async (
  roomId: Room["_id"],
  name: string
): Promise<undefined> => {
  const options = { method: "POST" };
  const qs = `name=${name}`;
  const response = await fetch(`${API_URI}/room/${roomId}/user?${qs}`, options);
  const data = await response.json();
  return data;
};

const api = { createRoom, addUserToRoom };
export default api;
