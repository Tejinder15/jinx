import "./App.css";
import { Routes, Route } from "react-router-dom";
import Setting from "./Pages/Setting/Setting";
import Bookmark from "./Pages/Bookmark/Bookmark";
import Followers from "./Pages/Followers/Followers";
import Following from "./Pages/Following/Following";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Explore from "./Pages/Explore/Explore";
import {ProtectedRoute} from "./Routes/protected-route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<h1 className="center-text">There's Nothing Here!</h1>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/Followers" element={<Followers/>}/>
          <Route path="/following" element={<Following/>}/>
          <Route path="/bookmark" element={<Bookmark/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
