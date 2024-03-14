import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site"));
  const navigate = useNavigate();
  async function loginAction(data: { data: string; token: string }) {
    //POSTING data to the api endpoint
    try {
      const response = await fetch(`your-api-endpoint/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem("site", res.token);
        navigate("/login");
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  function logOut() {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
  }

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const myContext = useContext(AuthContext);
  if (!myContext)
    throw new Error("AuthContext must be used within AuthProvider");
  return myContext;
}
