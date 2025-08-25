const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Order } = require('../../models/order');
const { User } = require('../../models/user');

module.exports = {
    createPaymentIntent: async (req, res) => {
        try {
            const { amount, currency, orderId } = req.body;
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                metadata: { orderId }
            });
            res.json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPaymentsReport: async (req, res) => {
        try {
            const payments = await stripe.paymentIntents.list({ limit: 100 });
            res.json(payments.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getUsersWithPayments: async (req, res) => {
        try {
            const users = await User.findAll({
                include: [{ model: Order, where: { paymentMethod: 'stripe' } }]
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
