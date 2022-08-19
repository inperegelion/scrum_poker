import { FC } from "react";
import { CreateRoomButton } from "../CreateRoomButton";

export const WelcomingPage: FC = () => {
  return (
    <div>
      <h1>Welcome to the Scrum Poker</h1>
      <p>This game help scrum teams to estimate their work tasks.</p>
      <CreateRoomButton />
      <p>
        If you want to joing a specific play room, please, request URL link.
      </p>
    </div>
  );
};
