import MyProfile from "../pages/Dashboard/MyProfile";
import AddReview from "../pages/Dashboard/AddReview";
import MyOrder from "../pages/Dashboard/MyOrder";
import AddProduct from "../pages/Dashboard/AddProduct";
import ManageOrders from "../pages/Dashboard/ManageOrders";
import Users from "../pages/Dashboard/Users";

export const adminRoutes = [
  { path: "my-profile", name: "My-Profile", Component: MyProfile },
  { path: "add-review", name: "Add-Review", Component: AddReview },
  { path: "my-orders", name: "My-Order", Component: MyOrder },
  { path: "add-product", name: "Add-Product", Component: AddProduct },
  { path: "users", name: "Users", Component: Users },
  { path: "manage-orders", name: "Manage-Orders", Component: ManageOrders },
];
