import { useState } from "react";
import { AuthConsumer } from "../hook/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginAction } = AuthConsumer();

  const userCredentials = {
    username,
    password,
  };

  return (
    <form>
      <input
        type="text"
        name=""
        id="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name=""
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={function (e) {
          e.preventDefault();
          loginAction(userCredentials);
        }}
      >
        Login
      </button>
    </form>
  );
}
