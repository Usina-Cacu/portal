import { Route, Routes } from "react-router-dom";
import './css/globals.css'
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}