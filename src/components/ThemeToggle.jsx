import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "../hooks/globalContext";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
  );
}

export default ThemeToggle;
