import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { WelcomingPage } from "./components/WelcomingPage";
import { RoomNameEntry } from "./components/RoomNameEntry";

import { UsernameContext } from "./contexts/userContext";
import { Poker } from "./components/Poker";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [name, setName] = useState<string>("");

  return (
    <QueryClientProvider client={queryClient}>
      <UsernameContext.Provider value={{ name, setName }}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomingPage />} />
              <Route path="room/:roomId/name" element={<RoomNameEntry />} />
              <Route path="room/:roomId" element={<Poker />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UsernameContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
