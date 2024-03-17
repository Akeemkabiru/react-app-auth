import { useState } from "react";
import { AuthConsumer } from "../hook/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAction } = AuthConsumer();
  const navigate = useNavigate();
  const userCredentials = {
    email,
    password,
  };
  function handleSubmit() {
    if (email && password) {
      loginAction(userCredentials);
      navigate("/login");
    }
  }
  return (
    <form onSubmit={() => handleSubmit}>
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
