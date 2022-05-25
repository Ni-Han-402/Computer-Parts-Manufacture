import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import "./App.css";
import Navber from "./components/Navber";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./authentication/AdminRoute";
import { ToastContainer } from "react-toastify";
import { adminRoutes } from "./routes/adminRoutes";

function App() {
  return (
    <>
      <Navber>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {adminRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))}
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </Navber>
    </>
  );
}

export default App;
