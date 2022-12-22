import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../../styles/NameInput.scss";

export const EnterName = (): JSX.Element => {
  const navigate = useNavigate();
  const [usernameDraft, setUsernameDraft] = useState<string>("");

  const [roomId] = useLocalStorage("roomId");
  const [, setUserId] = useLocalStorage("userId");
  const [, setUsername] = useLocalStorage("username");

  const { isLoading, isError, mutate } = useMutation(
    () => api.addUserToRoom({ roomId: roomId ?? "", username: usernameDraft }),
    {
      async onSuccess(response) {
        setUserId(response?.createdUser._id);
        setUsername(response?.createdUser.name);
        navigate(`/${roomId}`);
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
          placeholder="Nick"
          value={usernameDraft}
          onChange={onNameInputChange}
        />
      </p>
      <p>
        <button
          className="Button"
          onClick={() => submitUser()}
          disabled={isLoading}
        >
          GO
        </button>
        <ErrorMessage isError={isError} />
      </p>
    </div>
  );
};
