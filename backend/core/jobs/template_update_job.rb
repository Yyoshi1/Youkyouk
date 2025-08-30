class TemplateUpdateJob < ApplicationJob
  queue_as :default

  def perform(template_id)
    template = TemplateVersion.find(template_id)
    SyncService.push_template_changes(template)
  rescue => e
    Rails.logger.error("[TemplateUpdateJob] Failed to update template #{template_id}: #{e.message}")
  end
end
