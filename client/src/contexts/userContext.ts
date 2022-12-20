import { createContext, Dispatch } from "react";
import { IUser, IRoom } from "../interfaces";

interface IAppContext {
  username: string;
  setUsername: Dispatch<React.SetStateAction<string>>;
  userId: IUser["_id"];
  setUserId: Dispatch<React.SetStateAction<string>>;
  roomId: IRoom["_id"];
  setRoomId: Dispatch<React.SetStateAction<string>>;
}

const initialAppContext = {} as IAppContext;

export const AppContext = createContext<IAppContext>(initialAppContext);
