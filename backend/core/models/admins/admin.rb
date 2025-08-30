class Admin < User
  # Relations
  has_many :managed_investors, class_name: "Investor", foreign_key: "admin_id"
  has_many :audit_logs, as: :actor

  # Validations
  validates :super_admin, inclusion: { in: [true, false] }

  # Callbacks
  after_create :log_creation

  private

  def log_creation
    AuditLog.create!(action: "create_admin", user_id: self.id, details: "Admin created")
  end
end
