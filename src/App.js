import { Home } from "./Components/Home/home";
import Profile from "./Components/Profile";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Posts from "./Components/Posts";
import ToDo from "./Components/ToDo";
import { useState } from "react";
function App() {
  const [renderDetails, setRenderDetails] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="profile"
          element={
            <Profile
              renderDetails={renderDetails}
              setRenderDetails={setRenderDetails}
            />
          }
        />
        <Route
          path="gallery"
          element={<Gallery setRenderDetails={setRenderDetails} />}
        />
        <Route
          path="posts"
          element={<Posts setRenderDetails={setRenderDetails} />}
        />
        <Route
          path="todo"
          element={<ToDo setRenderDetails={setRenderDetails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
