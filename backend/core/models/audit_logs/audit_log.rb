class AuditLog < ApplicationRecord
  # Relations
  belongs_to :user, optional: true
  belongs_to :actor, polymorphic: true, optional: true
  belongs_to :trackable, polymorphic: true, optional: true

  # Validations
  validates :action, presence: true
  validates :details, presence: true
end
