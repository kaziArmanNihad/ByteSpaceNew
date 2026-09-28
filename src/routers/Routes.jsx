import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";

// Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";

// Auth
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

// Resources
import Documentation from "../pages/resources/Documentation";
import HelpCenter from "../pages/resources/HelpCenter";
import Community from "../pages/resources/Community";
import Status from "../pages/resources/Status";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // Pages
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
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
      // Resources
      {
        path: "/documentation",
        Component: Documentation,
      },
      {
        path: "/help-center",
        Component: HelpCenter,
      },
      {
        path: "/community",
        Component: Community,
      },
      {
        path: "/status",
        Component: Status,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
