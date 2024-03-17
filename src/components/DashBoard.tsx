import React from "react";
import { ContextConsumer } from "../hook/AuthContext";
React;
export default function DashBoard() {
  const { user, logOut } = ContextConsumer();
  return (
    <div>
      <h1>Welcome {user?.userName}</h1>
      <button onClick={() => logOut}></button>
    </div>
  );
}
