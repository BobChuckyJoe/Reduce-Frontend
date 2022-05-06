import "App.css";
import { Route, Routes } from "react-router-dom";
import Group from "screens/Group";
import Home from "screens/Home";
import Upload from "screens/Upload"
import TestScreen from "screens/TestScreen"
import SignUp from "screens/SignUp";
import Login from "screens/Login"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/camera" element={<Upload/>}/>
        <Route path="/test" element={<TestScreen/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/group" element={<Group />} />
        <Route path="/stats" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

// function App() {
//   return (
//     <div className="bg-white min-h-screen">
//       <Navbar />
//       <Routes>
//         <Route path="/group" element={<Group />} />
//         <Route path="/stats" element={<Home />} />
//         <Route path="/" element={<Navigate to="/stats" />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
