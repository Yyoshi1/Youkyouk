class NotificationJob < ApplicationJob
  queue_as :default

  def perform(event, data)
    NotificationService.send_notification(event, data)
  end
end
