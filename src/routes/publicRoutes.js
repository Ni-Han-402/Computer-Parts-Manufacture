import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Reviews from "../pages/Reviews/Reviews";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/reviews", name: "Home", Component: Reviews },
  { path: "/blog", name: "Home", Component: Blog },
  { path: "/contact", name: "Home", Component: Contact },
  { path: "/login", name: "Home", Component: Login },
  { path: "/register", name: "Home", Component: Register },
];
