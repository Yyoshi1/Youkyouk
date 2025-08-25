import { useState, useEffect } from "react";
import axios from "axios";

const StripeAdminPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("/api/payments/stripe");
      setPayments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Stripe payments:", error);
      setLoading(false);
    }
  };

  return (
    <div className="stripe-admin-page">
      <h1>Stripe Payments Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.customer_name}</td>
                <td>${payment.amount / 100}</td>
                <td>{payment.status}</td>
                <td>{new Date(payment.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StripeAdminPage;
