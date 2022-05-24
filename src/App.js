import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import "./App.css";
import Navber from "./components/Navber";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";

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
        </Routes>
      </Navber>
    </>
  );
}

export default App;
