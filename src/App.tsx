import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BuggyPage from "./components/BuggyPage";
import FixedPage from "./components/FixedPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/buggy" replace />} />
        <Route path="/buggy" element={<BuggyPage />} />
        <Route path="/fixed" element={<FixedPage />} />
      </Routes>
    </Router>
  );
}
