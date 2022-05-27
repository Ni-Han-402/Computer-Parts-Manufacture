import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-base-200">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard/add-review">Add Review</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/dashboard/my-orders">My Orders</NavLink>
            </li>
          )}
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/add-product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-orders">
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-products">
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
