export default function DashBoard() {
  const { user, logOut } = userAuth();
  return (
    <div>
      <h1>Welcome {user?.userName}</h1>
      <button onClick={() => logOut}></button>
    </div>
  );
}
