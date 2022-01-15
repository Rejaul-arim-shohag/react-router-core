import Home from "./Components/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import FriendDetail from "./Components/FriendDetail/FriendDetail";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="friend/:id" element={<FriendDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
