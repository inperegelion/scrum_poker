import { FC } from "react";

export const ErrorMessage: FC = () => {
  return (
    <p style={{ color: "white", backgroundColor: "red" }}>
      Something went wrong, can't commit an action.
      <br />
      Open console to see the details.
    </p>
  );
};
