import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import OrdersBtn from "./OrdersBtn";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <OrdersBtn />
    </>
  );
}
