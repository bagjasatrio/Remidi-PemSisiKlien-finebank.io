import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Context Creation
export const ThemeContext = createContext();

// Provider Component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  // Function to toggle dark/light mode
  const toggleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isDarkMode, toggleThemeMode }}
    >
      <div className={isDarkMode ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Prop Types
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
