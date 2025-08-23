import React, { useState } from "react";
import Products from "../../pages/seller/Products";
import Orders from "../../pages/seller/Orders";
import Messages from "../../pages/seller/Messages";
import StoreSettings from "../../pages/seller/StoreSettings";
import Reports from "../../pages/seller/Reports";

export default function SellerContent({ activeTab }) {
  switch(activeTab) {
    case "Products":
      return <Products />;
    case "Orders":
      return <Orders />;
    case "Messages":
      return <Messages />;
    case "Store Settings":
      return <StoreSettings />;
    case "Reports":
      return <Reports />;
    default:
      return <div>Select a section from the sidebar</div>;
  }
}
