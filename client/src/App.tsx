import { CreateRoom } from "./components/CreateRoom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Scrum poker</h1>
      <div>
        <h3>Join Room</h3>
        <input type="text" id="ENTER_ROOM_ID" />
        <div>
          <h5>Put your Card</h5>
          <div>here will be calrd to play</div>
          <h5>Room Players</h5>
          <table>here will be table of players & theirs cards</table>
        </div>
      </div>
      <CreateRoom />
    </div>
  );
}

export default App;
