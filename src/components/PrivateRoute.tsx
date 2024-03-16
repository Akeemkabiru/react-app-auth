import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/AuthContext";
//to check the token
const { token } = UseAuth();
export default function PrivateRoute() {
  if (!token) return <Navigate to={"/login"} />;

  return <div>PrivateRoute</div>;
}
