import { useQuery } from "@tanstack/react-query";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { IUser } from "../../interfaces";

import "../../styles/UserList.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const UsersList = (): JSX.Element => {
  const [roomId] = useLocalStorage("roomId");
  const [userId] = useLocalStorage("userId");

  const {
    data: room,
    isLoading,
    isError,
  } = useQuery(["room", roomId], () => api.getRoom(roomId ?? ""), {
    refetchInterval: 2_000,
  });

  return (
    <>
      {isLoading ? <p>Loading Users Estimates...</p> : null}
      <ErrorMessage isError={isError} />
      <ul className="UserList">
        {room?.users?.map((user) => (
          <UserRow
            key={`user-${user._id}`}
            user={user}
            isYou={userId === user._id}
          />
        ))}
      </ul>
    </>
  );
};

export const UserRow = ({
  user,
  isYou,
}: {
  user: IUser;
  isYou: boolean;
}): JSX.Element => {
  const { name, estimate } = user;
  return (
    <li key={`user-${user.name}`}>
      <span className="Username">{name}</span>
      <span className="Separator">{" — "}</span>
      <span className="Estimate">
        {estimate}
        {isYou ? " (You)" : ""}
      </span>
    </li>
  );
};
