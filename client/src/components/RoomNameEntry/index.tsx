import { ChangeEvent, FC, useContext, useState } from "react";
import { RoomContext } from "../../contexts/roomContext";
import { ProceedToGameButton } from "../ProceedToGameButton";

export const RoomNameEntry: FC = () => {
  const [name, setName] = useState<string>("");
  const { room } = useContext(RoomContext);

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    const nameDraft = event.currentTarget.value;
    setName(nameDraft);
  }

  return (
    <div>
      <h1>Scrum Poker</h1>
      <p>
        Your Room ID: <code>{room._id}</code>
      </p>
      <p>Enter your name to play</p>
      <input
        type="text"
        placeholder="Nick"
        value={name}
        onChange={onNameInputChange}
      />
      <ProceedToGameButton roomId={room._id} name={name} />
    </div>
  );
};
