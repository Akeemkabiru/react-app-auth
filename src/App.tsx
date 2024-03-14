import DashBoard from "./Home/DashBoard";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/login/Login";
import { AuthProvider } from "./hooks/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // const [openRegister, setOpenRegister] = useState(false);
  // function handleOpenRegister() {
  //   setOpenRegister(!openRegister);
  // }
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Routes>
          {/* <p>Hello World</p>
        {openRegister ? (
          <Register onClick={handleOpenRegister} />
        ) : (
          <Login onClick={handleOpenRegister} />
        )} */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
