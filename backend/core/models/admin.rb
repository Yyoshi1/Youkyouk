class Admin < ApplicationRecord
  belongs_to :user
  has_many :roles_permissions
  has_many :managed_investors, class_name: "Investor"

  # Level: super / admin / assistant
  validates :level, presence: true, inclusion: { in: %w[super admin assistant] }
end
