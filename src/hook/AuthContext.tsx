interface childrenProps {
  children: React.ReactNode;
}

type bodyProps = {
  email: string;
  password: string;
};

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }: childrenProps) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site"));

  //LOGIN
  async function loginAction(body: bodyProps) {
    try {
      const res = await fetch("endpoint", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("incorrect password or email");
      const response = await res.json();
      setToken(response.token);
      setUser(response.data.user);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer() {
  const useAuth = useContext(AuthContext);
  if (!useAuth) throw new Error("");
  return useAuth;
}

export { AuthProvider, AuthConsumer };
