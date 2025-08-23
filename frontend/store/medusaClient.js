import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
  baseUrl: "http://localhost:9000", // رابط backend
  maxRetries: 3,
});

export default medusa;
