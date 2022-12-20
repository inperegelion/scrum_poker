import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import api from "../../api";
import { AppContext } from "../../contexts/userContext";
import { ErrorMessage } from "../../components/ErrorMessage";
import { IUser } from "../../interfaces";

export const UsersList = (): JSX.Element => {
  const { userId, roomId } = useContext(AppContext);

  const {
    data: room,
    isLoading,
    isError,
  } = useQuery(["room", roomId], () => api.getRoom(roomId), {
    refetchInterval: 5_000,
  });

  return (
    <>
      {isLoading ? <p>Loading Users Estimates...</p> : null}
      <ErrorMessage isError={isError} />
      <ul>
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
      {name} - {estimate}
      {isYou ? "(You)" : ""}
    </li>
  );
};
