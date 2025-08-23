const fs = require("fs");
const path = require("path");

// 
async function createSellerPage(domain) {
  // 
  const sellerDir = path.join(__dirname, "../../frontend/pages/sellers", domain.domain_name);
  if (!fs.existsSync(sellerDir)) fs.mkdirSync(sellerDir, { recursive: true });

  // 
  const content = `
import React from "react";

export default function SellerDashboard() {
  return (
    <div>
      <h1>Seller Dashboard for ${domain.domain_name}</h1>
      <p>Model Type: ${domain.model_type}</p>
      {/* */}
    </div>
  );
}
`;
  fs.writeFileSync(path.join(sellerDir, "index.js"), content);
}

// 
async function createDomain(domainData) {
  const domain = new Domain();
  domain.id = uuidv4();
  domain.domain_name = domainData.domain_name;
  domain.model_type = domainData.model_type || "b2c";
  domain.is_active = true;
  const saved = await dataSource.getRepository(Domain).save(domain);

  // 
  await createSellerPage(saved);

  return saved;
}
