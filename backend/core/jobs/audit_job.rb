class AuditJob < ApplicationJob
  queue_as :default

  def perform(action, details, user_id)
    AuditLog.create!(
      action: action,
      details: details,
      user_id: user_id,
      created_at: Time.current
    )
    Rails.logger.info("[AuditJob] Audit log created for action: #{action} by user: #{user_id}")
  rescue => e
    Rails.logger.error("[AuditJob] Failed to create audit log: #{e.message}")
  end
end
