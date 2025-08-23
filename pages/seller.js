// pages/seller.js
import React from "react";
import BlocksEditor from "../frontend/components/editor/BlocksEditor";
import ThemesEditor from "../frontend/components/editor/ThemesEditor";
import TemplatesEditor from "../frontend/components/editor/TemplatesEditor";
import CustomFieldsEditor from "../frontend/components/editor/CustomFieldsEditor";

export default function SellerPage() {
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <BlocksEditor userRole="seller" />
      <ThemesEditor userRole="seller" />
      <TemplatesEditor userRole="seller" />
      <CustomFieldsEditor userRole="seller" />
    </div>
  );
}
