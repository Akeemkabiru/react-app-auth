interface childrenProps {
  children: React.ReactNode;
}

type bodyProps = {
  username: string;
  password: string;
};

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }: childrenProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("site"));
  //LOGIN
  async function loginAction(body: bodyProps) {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("incorrect password or username");
      } else {
        const response = await res.json();
        console.log(response);
        setToken(response.token);
        console.log(token);
        navigate("/dashboard");
        return;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ token, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer() {
  const useAuth = useContext(AuthContext);
  if (!useAuth) throw new Error("Auth context use out of provider");
  return useAuth;
}

export { AuthProvider, AuthConsumer };
