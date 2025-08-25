import { getStripePayments } from "../../../backend/addons/Payment/stripe/controller";

export default async function handler(req, res) {
  try {
    const payments = await getStripePayments();
    res.status(200).json(payments);
  } catch (error) {
    console.error("Stripe API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
