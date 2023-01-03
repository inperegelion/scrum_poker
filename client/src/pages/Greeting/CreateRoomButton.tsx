import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../../styles/Button.scss";

export const CreateRoomButton = (): JSX.Element => {
  const navigate = useNavigate();
  const [, setRoomId] = useLocalStorage("roomId");

  const { isLoading, isError, mutate } = useMutation(api.createRoom, {
    onSuccess(room) {
      setRoomId(room._id);
      navigate(`/${room._id}`);
    },
  });

  return (
    <>
      <button className="Button" onClick={() => mutate()} disabled={isLoading}>
        Create a Room
      </button>
      <ErrorMessage isError={isError} />
    </>
  );
};
