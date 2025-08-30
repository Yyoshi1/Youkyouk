class SyncService
  def self.push_template_changes(template)
    # Placeholder for sync logic (e.g., broadcasting via ActionCable or API calls)
    Rails.logger.info("[SyncService] Pushing template #{template.id} version #{template.version}")
    NotificationService.send_notification('template_updated', { template_id: template.id })
  end
end
