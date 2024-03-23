import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/AuthContext";

export function PrivateRoute() {
  const navigate = useNavigate();
  const { token } = useAuth();
  if (!token) navigate("/");
  return <Outlet />;
}
