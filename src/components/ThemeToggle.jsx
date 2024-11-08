import { useGlobalContext } from "../hooks/globalContext";

function ThemeToggle() {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return <div>ThemeToggle</div>;
}

export default ThemeToggle;
