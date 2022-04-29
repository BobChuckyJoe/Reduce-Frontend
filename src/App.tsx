import "App.css";
import Home from "screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Upload from "screens/Upload"
import TestScreen from "screens/TestScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="camera" element={<Upload/>}/>
        <Route path="test" element={<TestScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
