import Add from "../pages/Add";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Restaurant from "../pages/Restaurant";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Root from "../pages/Root";
import Basket from "../pages/Basket";
import Wishlist from "../pages/Wishlist";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];
