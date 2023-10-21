import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const UseContext = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div
      className="box-container"
      style={{
        backgroundColor: theme === "dark" ? "rgb(40,40,40" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>Use Context Hook</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
export default UseContext;
