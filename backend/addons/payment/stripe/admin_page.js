import axios from 'axios';

export const fetchPaymentsReport = async () => {
    const response = await axios.get('/api/addons/stripe/payments-report');
    return response.data;
};

export const fetchUsersWithPayments = async () => {
    const response = await axios.get('/api/addons/stripe/users-with-payments');
    return response.data;
};

export const createPaymentIntent = async (amount, currency, orderId) => {
    const response = await axios.post('/api/addons/stripe/create-payment-intent', {
        amount, currency, orderId
    });
    return response.data;
};
