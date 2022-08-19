import React, { Dispatch } from "react";
import { User } from "../interfaces";

interface IUsernameContext {
  name: User;
  setName: Dispatch<React.SetStateAction<string>>;
}

const initialUsernameContext = {} as IUsernameContext;

export const UsernameContext = React.createContext<IUsernameContext>(
  initialUsernameContext
);
