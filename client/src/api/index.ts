import { API_URI } from "../constants";
import { ICreateUserResponse, IRoom, IUser } from "../interfaces";

const createRoom = async (): Promise<IRoom> => {
  const options = { method: "POST" };
  const response = await fetch(`${API_URI}/rooms/`, options);
  const data: IRoom = await response.json();
  return data;
};

const addUserToRoom = async (params: {
  roomId: IRoom["_id"];
  username: string;
}): Promise<ICreateUserResponse> => {
  const { roomId, username } = params;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName: username }),
  };
  const response = await fetch(`${API_URI}/rooms/${roomId}/user/join`, options);
  const data: ICreateUserResponse = await response.json();
  return data;
};

const getRoom = async (roomId: IRoom["_id"]): Promise<IRoom> => {
  const options = { method: "GET" };
  const response = await fetch(`${API_URI}/rooms/${roomId}`, options);
  const data: IRoom = await response.json();
  return data;
};

const userChangeEstimate = async (
  roomId: IRoom["_id"],
  userId: string,
  estimate: string
): Promise<IUser> => {
  const options = { method: "PUT" };
  const qs = `estimate=${estimate}`;

  const response = await fetch(
    `${API_URI}/rooms/${roomId}/user/${userId}?${qs}`,
    options
  );
  const data = await response.json();
  return data;
};

const api = { createRoom, addUserToRoom, getRoom, userChangeEstimate };
export default api;
