import copy from "copy-to-clipboard";

export const CopyUrlToClipboard = (): JSX.Element => {
  const handler = () => {
    copy(`${location.origin}${location.pathname}`);
  };
  return <button onClick={handler}>Copy URL</button>;
};
