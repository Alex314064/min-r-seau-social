import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Header from "./components/Header";
import { Logout } from "./components/Logout";
import YourComponent from "./atoms/user";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { loggedUserAtom } from "./atoms/user";

function App() {
  const token = Cookies.get("token");
  const loggedUser = useAtom(loggedUserAtom);
  if (token && !loggedUser) {
    YourComponent();
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
        {/*  <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
