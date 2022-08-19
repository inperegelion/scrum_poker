import { useState } from "react";

import { RoomContext } from "./contexts/roomContext";
import { WelcomingPage } from "./components/WelcomingPage";
import { RoomNameEntry } from "./components/RoomNameEntry";

import { Room } from "./interfaces";
import "./App.css";

function App() {
  const [room, setRoom] = useState<Room>({} as Room);
  const isRoomAvailable = Boolean(room._id);

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      <div className="App">
        {isRoomAvailable ? <RoomNameEntry /> : <WelcomingPage />}
      </div>
    </RoomContext.Provider>
  );
}

export default App;
