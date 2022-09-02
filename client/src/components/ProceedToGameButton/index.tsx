import { FC } from "react";
import { useMutation } from "@tanstack/react-query";

import { Room } from "../../interfaces";
import api from "../../api";

import { ErrorMessage } from "../ErrorMessage";

interface Props {
  roomId: Room["_id"];
  name: string;
  callback: () => unknown;
}

export const ProceedToGameButton: FC<Props> = ({ roomId, name, callback }) => {
  const { isLoading, isError, mutate } = useMutation(api.createRoom, {
    async onSuccess() {
      await api.addUserToRoom(roomId, name);
      callback();
    },
  });

  return (
    <>
      <button onClick={() => mutate()} disabled={isLoading}>
        GO
      </button>
      {isError ? <ErrorMessage /> : null}
    </>
  );
};
