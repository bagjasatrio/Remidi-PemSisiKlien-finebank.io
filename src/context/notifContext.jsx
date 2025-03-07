import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NotifContext = createContext();

export const NotifContextProvider = ({ children }) => {
  //state untuk alert notification snackbar
  const [msg, setMsg] = useState();
  const [open, setOpen] = useState(true);

  //state untuk backdrop loader
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NotifContext.Provider
      value={{ msg, setMsg, open, setOpen, isLoading, setIsLoading }}
    >
      {children}
    </NotifContext.Provider>
  );
};

NotifContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
