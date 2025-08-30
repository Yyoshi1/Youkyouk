class PaymentService
  def self.process_payment(trip_id)
    trip = Trip.find(trip_id)
    amount = trip.price_cents

    # Placeholder for real payment gateway integration (Stripe, PayPal, etc.)
    Rails.logger.info("[PaymentService] Processing payment of #{amount} cents for Trip ID: #{trip_id}")

    # Assume payment successful
    trip.update(payment_status: 'paid')
    NotificationService.send_notification('payment_success', { trip_id: trip_id, amount: amount })
    true
  rescue => e
    Rails.logger.error("[PaymentService] Payment failed: #{e.message}")
    false
  end
end
