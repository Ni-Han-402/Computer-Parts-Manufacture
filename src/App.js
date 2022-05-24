import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import "./App.css";
import Navber from "./components/Navber";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./authentication/AdminRoute";

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Navber>
    </>
  );
}

export default App;
