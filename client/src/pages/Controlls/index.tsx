import api from "../../api";
import {
  useLocalStorage,
  useSessionStorage,
} from "../../hooks/useLocalStorage";
import "../../styles/Controls.scss";

export const Controls = (): JSX.Element => {
  const [userId, , removeUserId] = useSessionStorage("userId");
  const [username, , removeUsername] = useLocalStorage("username");
  const [roomId, , removeRoomId] = useSessionStorage("roomId");

  const forgetUsername = () => removeUsername();

  const forgetUserid = () => removeUserId();

  const goHome = () => document.location.assign("/");

  const deleteRoom = async () => {
    if (roomId) {
      try {
        await api.deleteRoom(roomId);
        removeRoomId();
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
        <button>UserName: {username}</button>
        <button>UserId: {userId}</button>
        <button>RoomId: {roomId}</button>
        <button onClick={goHome}>Go Home</button>
        <button onClick={forgetUsername}>Forget UserName</button>
        <button onClick={forgetUserid}>Forget UserId</button>
        <button onClick={deleteRoom} disabled={!roomId}>
          Delete Room
        </button>
      </div>
    </>
  );
};
