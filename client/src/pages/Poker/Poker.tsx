import { useContext } from "react";

import { AppContext } from "../../contexts/userContext";
import { EstimateCards } from "./EstimateCards";
import { UsersList } from "./UserList";

export const Poker = (): JSX.Element => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <p>
        Your Name: <code>{username}</code>
      </p>
      <EstimateCards />
      <UsersList />
    </div>
  );
};
