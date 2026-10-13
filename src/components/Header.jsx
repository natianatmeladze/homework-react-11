import { Link } from "react-router";


const Header = ({ isDark, handleThemeChange }) => {
  return (
    <>
    <div className="flex items-center justify-around">
      <button
        onClick={handleThemeChange}
        className={
          isDark
            ? "p-3 bg-pink-500 rounded-lg text-md font-bold text-black m-4 cursor-pointer"
            : "p-3 cursor-pointer bg-pink-500 rounded-lg text-md font-bold text-white m-4"
        }
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <nav  className="flex justify-center gap-5">
        <Link className="text-lg text-pink-500 font-bold bg-pink-100 rounded-[50px] p-3" to="/">Home</Link>
      </nav>
        </div>
    </>
  );
};

export default Header;
