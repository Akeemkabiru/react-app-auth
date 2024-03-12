import { useState } from "react";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { AuthProvider } from "./hooks/AuthContext";

export default function App() {
  const [openRegister, setOpenRegister] = useState(false);
  function handleOpenRegister() {
    setOpenRegister(!openRegister);
  }
  return (
    <div>
      <AuthProvider>
        <p>Hello World</p>
        {openRegister ? (
          <Register onClick={handleOpenRegister} />
        ) : (
          <Login onClick={handleOpenRegister} />
        )}
      </AuthProvider>
    </div>
  );
}
