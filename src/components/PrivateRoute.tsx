import { Outlet, useNavigate } from "react-router-dom";
import { AuthConsumer } from "../hook/AuthContext";

export function PrivateRoute() {
  const navigate = useNavigate();
  const { token } = AuthConsumer();
  if (token) navigate("/");
  return <Outlet />;
}
