import { useParams } from "react-router-dom";
import api from "../../api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../../styles/Controls.scss";

export const Controls = (): JSX.Element => {
  const [userId, setUserId, removeUserId] = useLocalStorage("userId");
  const [username, setUsername, removeUsername] = useLocalStorage("username");
  const [roomId, setRoomId, removeRoomId] = useLocalStorage("roomId");

  const forgetUsername = () => removeUsername();

  const forgetUserid = () => removeUserId();

  const goHome = () => document.location.assign("/");

  const deleteRoom = async () => {
    if (roomId) {
      try {
        await api.deleteRoom(roomId);
        goHome();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <hr />
      Controls
      <div className="Controls">
        <button onClick={goHome}>Go Home</button>
        <button>UserName: {username}</button>
        <button onClick={forgetUsername}>Forget UserName</button>
        <button>UserId: {userId}</button>
        <button onClick={forgetUserid}>Forget UserId</button>
        <button onClick={deleteRoom} disabled={!roomId}>
          Delete Room
        </button>
      </div>
    </>
  );
};
