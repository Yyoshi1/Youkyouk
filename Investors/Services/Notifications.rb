class Notifications
  def self.notify_investor(investor, message)
    NotificationService.send_notification("investor_alert", { investor_id: investor.id, message: message })
  end
end
