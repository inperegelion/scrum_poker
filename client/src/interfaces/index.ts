export interface RoomResponse {
  room: Room;
}
export interface Room {
  _id: string;
  createdAt: string;
  updatedAt: string;
  users: {
    [key: string]: User;
  };
}
export interface User {
  name: string;
  estimate?: string;
  _id: string;
}
