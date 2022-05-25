import MyProfile from "../pages/Dashboard/MyProfile";
import AddReview from "../pages/Dashboard/AddReview";
import MyOrder from "../pages/Dashboard/MyOrder";
import AddProduct from "../pages/Dashboard/AddProduct";
import ManageOrders from "../pages/Dashboard/ManageOrders";

export const adminRoutes = [
  { path: "my-profile", name: "My-Profile", Component: MyProfile },
  { path: "add-review", name: "Home", Component: AddReview },
  { path: "my-orders", name: "Home", Component: MyOrder },
  { path: "add-product", name: "Home", Component: AddProduct },
  { path: "manage-orders", name: "Home", Component: ManageOrders },
];
