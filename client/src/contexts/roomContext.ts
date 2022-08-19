import React, { Dispatch } from "react";
import { Room } from "../interfaces";

interface IRoomContext {
  room: Room;
  setRoom: Dispatch<React.SetStateAction<Room>>;
}

const initialRoomContext = {} as IRoomContext;

export const RoomContext =
  React.createContext<IRoomContext>(initialRoomContext);
