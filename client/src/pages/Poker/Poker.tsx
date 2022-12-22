import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EstimateCards } from "./EstimateCards";
import { UsersList } from "./UserList";

export const Poker = (): JSX.Element => {
  const [username] = useLocalStorage("username");

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
