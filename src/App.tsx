import { useState } from "react";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

export default function App() {
  const [openRegister, setOpenRegister] = useState(false);
  function handleOpenRegister() {
    setOpenRegister(!openRegister);
  }
  return (
    <div>
      {openRegister ? (
        <Register onClick={handleOpenRegister} />
      ) : (
        <Login onClick={handleOpenRegister} />
      )}
    </div>
  );
}
