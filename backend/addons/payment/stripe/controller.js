const express = require('express');
const router = express.Router();
const stripeController = require('./controller');
const { checkPermissions } = require('../../middleware/permissions');

router.post('/create-payment-intent', checkPermissions('stripe'), stripeController.createPaymentIntent);
router.get('/payments-report', checkPermissions('stripe'), stripeController.getPaymentsReport);
router.get('/users-with-payments', checkPermissions('stripe'), stripeController.getUsersWithPayments);

module.exports = router;
