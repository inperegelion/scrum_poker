import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export const CopyUrlToClipboard = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => setIsClicked(false), 5000);
    }
  }, [isClicked]);

  const handler = () => {
    copy(`${location.origin}${location.pathname}`);
    setIsClicked(true);
  };

  return (
    <button onClick={handler}>
      {isClicked ? "Copied!" : "Copy Invite Link"}
    </button>
  );
};
