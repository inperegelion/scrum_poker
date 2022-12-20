interface Props {
  isError: boolean;
}

export const ErrorMessage = ({ isError }: Props): JSX.Element | null => {
  if (!isError) return null;
  return (
    <p style={{ color: "white", backgroundColor: "red" }}>
      Something went wrong, can't commit an action.
      <br />
      Open console to see the details.
    </p>
  );
};
