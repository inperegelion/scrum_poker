import "../../styles/ErrorMessage.scss";

interface Props {
  isError: boolean;
  message?: string;
}

export const ErrorMessage = ({
  isError,
  message,
}: Props): JSX.Element | null => {
  if (!isError) return null;
  return (
    <div className="ErrorMessage">
      {message ?? "Something went wrong, can't commit an action."}
      <br />
      Open console to see the details.
    </div>
  );
};
