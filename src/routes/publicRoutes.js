import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import NotFound from "../pages/NotFound/NotFound";
import Parts from "../pages/Parts/Parts";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/parts", name: "Parts", Component: Parts },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
  { path: "/*", name: "NotFound", Component: NotFound },
];
