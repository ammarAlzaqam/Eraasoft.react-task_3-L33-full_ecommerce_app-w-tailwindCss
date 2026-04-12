import Category from "../category/page";
import Home from "../home/page";
import Layout from "../layout/layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
    ],
  },
];
