import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Reviews from "./pages/Reviews";
import Weekly from "./pages/Weekly";
import Settings from "./pages/Settings";
import Research from "./pages/Research";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/research",
    Component: Research,
  },
  {
    path: "/library",
    Component: Library,
  },
  {
    path: "/reviews",
    Component: Reviews,
  },
  {
    path: "/weekly",
    Component: Weekly,
  },
  {
    path: "/settings",
    Component: Settings,
  },
]);
