import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleThemeChange = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <div
        className={isDark ? " bg-[#121212] min-h-screen" : "bg-white min-h-screen"}
      >

        <Header isDark={isDark} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
