import React, { useState } from "react";

export const AuthContext = React.createContext();

// console.log("token",token)
function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });
  const app_token = localStorage.getItem("login_token")

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: app_token
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  }

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
