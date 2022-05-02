import "App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Group from "screens/Group";
import Home from "screens/Home";
import Navbar from "components/Navbar";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/group" element={<Group />} />
        <Route path="/stats" element={<Home />} />
        <Route path="/" element={<Navigate to="/stats" />} />
      </Routes>
    </div>
  );
}

export default App;
