import PartDetail from "../pages/Home/PartDetail";
import Reviews from "../pages/Reviews/Reviews";

export const privateRoutes = [
  { path: "/reviews", name: "Home", Component: Reviews },
  { path: "/part/:partId", name: "Home", Component: PartDetail },
];
