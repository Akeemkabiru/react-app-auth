import { Navigate } from "react-router-dom";
import useAuth from "./AuthContext";
//to check the token

export default function PrivateRoute() {
  const auth = useAuth();
  if (!auth.token) return <Navigate to={"/login"} />;

  return <div>PrivateRoute</div>;
}
