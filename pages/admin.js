// pages/admin.js
import React from "react";
import BlocksEditor from "../frontend/components/editor/BlocksEditor";
import ThemesEditor from "../frontend/components/editor/ThemesEditor";
import TemplatesEditor from "../frontend/components/editor/TemplatesEditor";
import CustomFieldsEditor from "../frontend/components/editor/CustomFieldsEditor";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <BlocksEditor userRole="admin" />
      <ThemesEditor userRole="admin" />
      <TemplatesEditor userRole="admin" />
      <CustomFieldsEditor userRole="admin" />
    </div>
  );
}
