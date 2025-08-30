class BackupJob < ApplicationJob
  queue_as :low_priority

  def perform
    timestamp = Time.now.strftime("%Y%m%d_%H%M%S")
    backup_dir = Rails.root.join("backups")
    FileUtils.mkdir_p(backup_dir)
    system("pg_dump -U #{ENV['DB_USER']} #{ENV['DB_NAME']} > #{backup_dir}/backup_#{timestamp}.sql")
    Rails.logger.info("[BackupJob] Backup created: backup_#{timestamp}.sql")
  rescue => e
    Rails.logger.error("[BackupJob] Backup failed: #{e.message}")
  end
end
