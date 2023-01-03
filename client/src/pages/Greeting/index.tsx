import { CreateRoomButton } from "./CreateRoomButton";

export const Greeting = (): JSX.Element => {
  return (
    <>
      <h1>Welcome to the Scrum Poker</h1>
      <p>This game help scrum teams to estimate their work tasks.</p>
      <CreateRoomButton />
      <p>
        If you want to joing a specific play room, please, request an invite
        URL.
      </p>
    </>
  );
};
