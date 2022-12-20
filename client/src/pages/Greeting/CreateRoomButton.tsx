import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { AppContext } from "../../contexts/userContext";

export const CreateRoomButton = (): JSX.Element => {
  const navigate = useNavigate();
  const { setRoomId } = useContext(AppContext);

  const { isLoading, isError, mutate } = useMutation(api.createRoom, {
    onSuccess(room) {
      setRoomId(room._id);
      navigate(`/${room._id}`);
    },
  });

  return (
    <>
      <button onClick={() => mutate()} disabled={isLoading}>
        Create a Room
      </button>
      <ErrorMessage isError={isError} />
    </>
  );
};
