class PaymentTracking
  def self.track_payment(investor, amount_cents)
    # Log payment for the investor
    Payment.create!(investor: investor, amount_cents: amount_cents)
  end
end
