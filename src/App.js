import { Home } from "./Components/Home/home";
import Profile from "./Components/Profile";
import "./styles/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Posts from "./Components/Posts";
import ToDo from "./Components/ToDo";
import { createContext, useState } from "react";
const MyContext = createContext()
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="profile" element={<Profile /> } />
      <Route path="gallery" element={<Gallery /> } />
      <Route path="posts" element={<Posts /> } />
      <Route path="todo" element={<ToDo /> } />
      </Routes>
    </div>
  );
}

export default App;
export {MyContext}
