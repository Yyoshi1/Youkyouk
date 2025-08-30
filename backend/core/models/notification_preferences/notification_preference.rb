class NotificationPreference < ApplicationRecord
  # Relations
  belongs_to :user

  # Validations
  validates :email_enabled, :push_enabled, inclusion: { in: [true, false] }
end
