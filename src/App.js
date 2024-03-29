import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Gamecards from "./components/Gamecards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route default path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="game" element={<Gamecards />} />
      </Routes>
    </BrowserRouter>
  );
  console.log("hello")
}

export default App;
