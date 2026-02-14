import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ComposePost from "./Pages/Compose.Post";
import Post from "./Pages/Post";
import Layout from "./layout";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Explorer from "./Pages/Explorer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/compose/post" element={<ComposePost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explorer/>}/>
            <Route path="/search/:query" element={<Search />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
