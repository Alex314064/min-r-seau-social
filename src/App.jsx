import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Cookies from "js-cookie";
import useUser from "./hooks/UserHook";

const App = () => {
  const token = Cookies.get("token");
  const getUser = useUser(token);
  token != null && getUser(token);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
