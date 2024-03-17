import { Navigate } from "react-router-dom";
import { ContextConsumer } from "../hook/AuthContext";

//to check the token

export default function PrivateRoute() {
  const { token } = ContextConsumer();
  if (!token) return <Navigate to={"/login"} />;

  return <div>PrivateRoute</div>;
}
