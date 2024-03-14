import useAuth from "../hooks/AuthContext";

export default function DashBoard() {
  const { user, logOut } = useAuth();
  return (
    <div>
      <h1>Welcome {user?.userName}</h1>
      <button onClick={() => logOut}></button>
    </div>
  );
}
