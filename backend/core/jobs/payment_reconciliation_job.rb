class PaymentReconciliationJob < ApplicationJob
  queue_as :default

  def perform(trip_id)
    success = PaymentService.process_payment(trip_id)
    unless success
      Rails.logger.error("[PaymentReconciliationJob] Payment reconciliation failed for Trip ID: #{trip_id}")
    end
  end
end
