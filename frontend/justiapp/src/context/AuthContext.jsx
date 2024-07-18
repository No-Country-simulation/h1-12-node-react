//AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  console.log(auth);
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    const token = cookie ? cookie.split("=")[1] : null;
    console.log(token);
    if (token) {
      setAuth({ token });
    } else {
      navigate("/");
    }
  }, [navigate]);

  const login = (token) => {
    setAuth({ token });
    navigate("/homeadmin");
  };

  const logout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setAuth(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
