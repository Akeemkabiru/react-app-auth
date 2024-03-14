import { Navigate } from "react-router-dom";
import useAuth from "../hooks/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuth();
  if (!user.token) return <Navigate to={"/login"} />;

  return <div>PrivateRoute</div>;
}
