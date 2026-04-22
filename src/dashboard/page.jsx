import { useState } from "react";
import AsideBar from "./components/AsideBar";
import ProductsManagement from "./components/ProductsManagement";
import OrdersManagement from "./components/OrdersManagement";

export default function DashboardPage() {
  const [link, setLink] = useState("dashboard");

  return (
    <section className="flex items-start">
      {/*//! Aside bar */}
      <AsideBar link={link} setLink={setLink} />

      {/*//! Managements */}
      <div className="flex grow flex-col gap-4 pb-26 md:pb-32 pt-8 lg:py-8 px-4 md:px-10">
        {(link === "dashboard" || link === "products") && (
          <ProductsManagement />
        )}
        {(link === "dashboard" || link === "orders") && <OrdersManagement />}
      </div>
    </section>
  );
}
