import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        backgroundColor: isDark ? "#f0c324" : "#333",
        color: isDark ? "#333" : "#fff",
        fontWeight: "bold",
        marginBottom: "20px"
      }}
    >
      {isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
    </button>
  );
};

export default ThemeToggle;