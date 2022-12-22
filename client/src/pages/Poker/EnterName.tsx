import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useContext, useState } from "react";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { AppContext } from "../../contexts/userContext";
import "../../styles/NameInput.scss";

export const EnterName = (): JSX.Element => {
  const { setUserId, setUsername, roomId } = useContext(AppContext);
  const [usernameDraft, setUsernameDraft] = useState<string>("");

  const { isLoading, isError, mutate } = useMutation(
    () => api.addUserToRoom({ roomId, username: usernameDraft }),
    {
      async onSuccess(response) {
        setUserId(response?.createdUser._id);
        setUsername(response?.createdUser.name);
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
