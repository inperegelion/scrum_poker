import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PokerPage } from "./pages/Poker/PokerPage";
import { Greeting } from "./pages/Greeting";

import { AppContext } from "./contexts/userContext";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [username, setUsername] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{ username, setUsername, userId, setUserId, roomId, setRoomId }}
      >
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<Greeting />} />
              <Route path="/:roomId" element={<PokerPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
