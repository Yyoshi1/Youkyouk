class RolesPermission < ApplicationRecord
  belongs_to :admin

  # JSON field storing permissions per module
  validates :role_name, presence: true
  validates :permissions, presence: true
end
