import { useMutation } from "@tanstack/react-query";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api";
import { RoomContext } from "../../contexts/roomContext";

import { ErrorMessage } from "../ErrorMessage";

export const CreateRoomButton: FC = () => {
  const { setRoom } = useContext(RoomContext);
  const navigate = useNavigate();
  const { isLoading, isError, mutate } = useMutation(api.createRoom, {
    onSuccess(response) {
      setRoom(response.room);
      navigate(`room/${response.room._id}/name`);
    },
  });

  return (
    <>
      <button onClick={() => mutate()} disabled={isLoading}>
        Create a Room
      </button>
      {isError ? <ErrorMessage /> : null}
    </>
  );
};
