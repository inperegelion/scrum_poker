import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PokerPage } from "./pages/Poker/PokerPage";
import { Greeting } from "./pages/Greeting";

import "./styles/App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Greeting />} />
            <Route path="/:roomId" element={<PokerPage />} />
          </Routes>
        </BrowserRouter>
        {/* <Controls /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
