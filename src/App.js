import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import "./App.css";
import Navber from "./components/Navber";

function App() {
  return (
    <>
      <Navber>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Navber>
    </>
  );
}

export default App;
