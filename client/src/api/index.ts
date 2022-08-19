import { API_URI } from "../constants";
import { RoomResponse } from "../interfaces";

const createRoom = async (): Promise<RoomResponse> => {
  const options = { method: "POST" };
  const response = await fetch(`${API_URI}/room`, options);
  const data = await response.json();
  return data;
};

const api = { createRoom };
export default api;
