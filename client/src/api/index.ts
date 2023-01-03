import { IRoom, IUser } from "../interfaces";
import { getApiUrlFromLocation } from "../utils/getApiUri";

const API_URI = getApiUrlFromLocation(window.location);

const createRoom = async (): Promise<IRoom> => {
  const options = { method: "POST" };
  const response = await fetch(`${API_URI}/room/`, options);
  const data: IRoom = await response.json();
  return data;
};

const addUserToRoom = async (params: {
  roomId: IRoom["_id"];
  username: string;
}): Promise<IUser> => {
  const { roomId, username } = params;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: username }),
  };
  const response = await fetch(`${API_URI}/room/${roomId}/user`, options);
  const data: IUser = await response.json();
  return data;
};

const getRoom = async (roomId: IRoom["_id"]): Promise<IRoom> => {
  const options = { method: "GET" };
  const response = await fetch(`${API_URI}/room/${roomId}`, options);
  if (response.status === 404) throw 404;

  const data: IRoom = await response.json();
  return data;
};

const deleteRoom = async (roomId: IRoom["_id"]): Promise<204> => {
  const options = { method: "DELETE" };
  const response = await fetch(`${API_URI}/room/${roomId}`, options);
  if (response.status === 204) return 204;
  throw `failed to delete a room with Id ${roomId}`; // todo: wright a proper handling
};

const userChangeEstimate = async (
  roomId: IRoom["_id"],
  userId: string,
  estimate: string
): Promise<IUser> => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ estimate }),
  };
  const response = await fetch(
    `${API_URI}/room/${roomId}/user/${userId}`,
    options
  );
  const data = await response.json();
  return data;
};

const api = {
  createRoom,
  addUserToRoom,
  getRoom,
  userChangeEstimate,
  deleteRoom,
};
export default api;
