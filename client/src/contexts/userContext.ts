import React, { Dispatch } from "react";

interface IUsernameContext {
  name: string;
  setName: Dispatch<React.SetStateAction<string>>;
}

const initialUsernameContext = {} as IUsernameContext;

export const UsernameContext = React.createContext<IUsernameContext>(
  initialUsernameContext
);
