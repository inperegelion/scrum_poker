import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api";

import { ErrorMessage } from "../ErrorMessage";

export const CreateRoomButton: FC = () => {
  const navigate = useNavigate();
  const { isLoading, isError, mutate } = useMutation(api.createRoom, {
    onSuccess(response) {
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
