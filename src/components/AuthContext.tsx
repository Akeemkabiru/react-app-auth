import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export type authProviderProps = {
  children: React.ReactNode;
};
type loginActionProps = {
  data: { email: string; password: string };
};

const AuthContext = createContext({});

const AuthProvider = ({ children }: authProviderProps) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data: loginActionProps) => {
    //Login and send data to the API endpoint
    try {
      const response = await fetch("your-api-endpoint/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      //the response is an object of data containg the user and token as its element
      if (res.data) {
        setUser(res.data.user); //so that user information can be shared accross or displayed on dashboard
        setToken(res.token);
        localStorage.setItem("site", res.token); // set the token to localstorage or cookies
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
