import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getStripePayments = async () => {
  try {
    const payments = await stripe.paymentIntents.list({ limit: 20 });
    return payments.data.map((p) => ({
      id: p.id,
      amount: p.amount,
      status: p.status,
      customer_name: p.customer_details?.name || "Unknown",
      created_at: p.created,
    }));
  } catch (err) {
    console.error("Error fetching Stripe payments:", err);
    throw err;
  }
};
