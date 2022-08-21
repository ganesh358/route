import React, { useState } from "react";

export const AuthContext = React.createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");

  const toggle = () => {
    setIsAuth(!isAuth);
  };
  const loginUser = (email) => {
    setEmail(email);

    setIsAuth(true);
  };
  const logoutUser = () => {
    setEmail("");

    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, loginUser, logoutUser, email }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AppContextProvider;
