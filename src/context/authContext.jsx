import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useState, useEffect } from "react";

const INITIAL_LOGGED_IN_STATE = !!localStorage.getItem("refreshToken"); // Check if refreshToken exists
const INITIAL_USERNAME = localStorage.getItem("username") || ""; // Get username from localStorage

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_LOGGED_IN_STATE);
  const [name, setName] = useState(INITIAL_USERNAME);

  // Save username to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem("username", name);
    } else {
      localStorage.removeItem("username");
    }
  }, [name]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required and of type 'node'
};
