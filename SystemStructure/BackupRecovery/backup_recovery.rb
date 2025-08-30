class BackupRecovery
  def self.create_backup
    BackupJob.perform_now
  end

  def self.restore_backup(file_path)
    # 
    system("pg_restore -U #{ENV['DB_USER']} -d #{ENV['DB_NAME']} #{file_path}")
  end
end
