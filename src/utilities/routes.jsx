import Category from "../category/page";
import Checkout from "../checkout/page";
import DashboardPage from "../dashboard/page";
import Home from "../home/page";
import Layout from "../layout/layout";
import OrdersPage from "../orders/page";
import ProductDetails from "../product-details/page";

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
      {
        path: "product-details/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];
