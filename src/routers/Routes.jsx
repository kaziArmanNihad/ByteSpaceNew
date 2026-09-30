import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";

// Pages
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import CreatorProfile from "../pages/creatorProfile/CreatorProfile";

// Auth
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import NotFound from "../pages/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // Pages
      { index: true, Component: Home },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/creatorProfile",
        Component: CreatorProfile,
      },

      // Auth
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
