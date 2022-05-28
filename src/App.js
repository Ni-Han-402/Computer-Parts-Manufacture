import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import "./App.css";
import Navber from "./components/Navber";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import { privateRoutes } from "./routes/privateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/AddReview";
import MyOrder from "./pages/Dashboard/MyOrder";
import AddProduct from "./pages/Dashboard/AddProduct";
import Users from "./pages/Dashboard/Users";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div>
      <Navber>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="my-orders" element={<MyOrder />} />
              <Route path="payment/:orderId" element={<Payment />} />
              <Route
                path="users"
                element={
                  <AdminRoute>
                    <Users />
                  </AdminRoute>
                }
              />
              <Route
                path="add-product"
                element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                }
              />
              <Route
                path="manage-orders"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="manage-products"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Navber>
    </div>
  );
}

export default App;
