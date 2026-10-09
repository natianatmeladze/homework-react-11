import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleThemeChange = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <div className={isDark ? " bg-black min-h-screen" : "bg-white min-h-screen"}>
        <button
          onClick={handleThemeChange}
          className={
            isDark
              ? "p-3 bg-pink-500 rounded-lg text-md font-bold text-black m-4 cursor-pointer"
              : "p-3 cursor-pointer bg-pink-500 rounded-lg text-md font-bold text-white m-4"
          }
        >
          {isDark ? "Dark Mode" : "Light Mode"}
        </button>
        <h1 className={isDark ? "text-2xl text-white font-bold flex justify-center" : "text-2xl text-black font-bold flex justify-center"}>
          Learning React
        </h1>
      </div>
    </>
  );
}

export default App;
