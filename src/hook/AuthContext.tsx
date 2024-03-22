interface childrenProps {
  children: React.ReactNode;
}

type bodyProps = {
  username: string;
  password: string;
};
interface valueTypes {
  loginAction: () => void;
  token: string | null;
  logOut: (body: bodyProps) => Promise<void>;
  user: any | null;
  registerAction: (body: bodyProps) => Promise<void>;
}
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<null | valueTypes>(null);

export default function AuthProvider({ children }: childrenProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("site"));
  const [user, setUser] = useState<null | string>(null);
  //LOGIN
  async function loginAction(body: bodyProps) {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error("incorrect password or username");
      } else {
        const response = await res.json();
        setToken(response.token);
        setUser(response.data.user);
        navigate("/dashboard");
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  //REGISTER
  async function registerAction(body: bodyProps) {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error("Registeration failed");
      } else {
        const response = await res.json();
        setToken(response.token);
        setUser(response.data.user);
        navigate("/dashboard");
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  //LOGOUT
  function logOut() {
    setToken("");
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{ loginAction, token, logOut, user, registerAction }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth context use out of provider");
  return context;
}
