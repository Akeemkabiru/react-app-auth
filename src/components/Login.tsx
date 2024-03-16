import { useState } from "react";
import { UseAuth } from "../hooks/AuthContext";
const auth = UseAuth();
export type loginProps = {
  onClick: () => void;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const input = {
    email: email,
    password: password,
  };
  function handleSubmit() {
    if (email !== "" && password !== "") auth.loginAction(input);
    console.log(email, password);
  }
  return (
    <main className="h-screen w-screen bg-slate-100 flex flex-col justify-center items-center">
      <form
        className="flex flex-row gap-2 bg-blue-300 p-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="user-email">Email:</label>
          <label htmlFor="password">Password:</label>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={email}
            type="email"
            id="user-email"
            placeholder="Enter your email"
            className="rounded-sm p-1 focus:outline-none"
            onChange={function (e) {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            id="user-password"
            placeholder="Enter your password"
            className="rounded-sm p-1 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-4">
        <span className="mr-4">Do not have account before?</span>
      </div>
    </main>
  );
}
