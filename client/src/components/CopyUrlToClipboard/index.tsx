import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

import "../../styles/Button.scss";

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
    <button
      onClick={handler}
      // className="TinnyButton"
    >
      {isClicked ? "Copied!" : "Copy Invite Link"}
    </button>
  );
};
