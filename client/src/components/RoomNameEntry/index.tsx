import { ChangeEvent, FC, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsernameContext } from "../../contexts/userContext";
import { ProceedToGameButton } from "../ProceedToGameButton";

export const RoomNameEntry: FC = () => {
  const navigate = useNavigate();

  const { name, setName } = useContext(UsernameContext);
  const { roomId } = useParams();

  if (!roomId) navigate("/");

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    const nameDraft = event.currentTarget.value;
    setName(nameDraft);
  }

  return (
    <div>
      <h1>Scrum Poker</h1>
      <p>
        Your Room ID: <code>{roomId}</code>
      </p>
      <p>Enter your name to play</p>
      <p>
        <input
          type="text"
          placeholder="Nick"
          value={name}
          onChange={onNameInputChange}
        />
      </p>
      <ProceedToGameButton
        roomId={roomId || ""}
        name={name}
        callback={() => navigate(`/room/${roomId}`)}
      />
    </div>
  );
};
