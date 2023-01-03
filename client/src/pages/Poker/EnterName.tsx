import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import {
  useLocalStorage,
  useSessionStorage,
} from "../../hooks/useLocalStorage";
import "../../styles/NameInput.scss";

export const EnterName = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const [roomId] = useSessionStorage("roomId");
  const [, setUserId] = useSessionStorage("userId");
  const [username, setUsername] = useLocalStorage("username");
  const [usernameDraft, setUsernameDraft] = useState<string>(username ?? "");

  const { isLoading, isError, mutate } = useMutation(
    () =>
      api.addUserToRoom({
        roomId: roomId ?? params.roomId ?? "",
        username: usernameDraft,
      }),
    {
      async onSuccess(response) {
        setUserId(response?._id);
        setUsername(response?.name);
        navigate(0);
      },
    }
  );

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUsernameDraft(event.currentTarget.value);
  }

  function submitUser() {
    mutate();
  }

  return (
    <div>
      <p>Enter your name to play</p>
      <p>
        <input
          className="NameInput"
          name="name"
          type="text"
          placeholder="Nickname"
          value={usernameDraft}
          onChange={onNameInputChange}
        />
      </p>
      <div>
        <button
          className="Button"
          onClick={() => submitUser()}
          disabled={isLoading}
        >
          GO
        </button>
        <ErrorMessage isError={isError} />
      </div>
    </div>
  );
};
