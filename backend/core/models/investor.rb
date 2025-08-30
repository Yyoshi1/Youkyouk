class Investor < ApplicationRecord
  has_many :assigned_templates, class_name: "TemplateVersion"

  validates :name, presence: true
  validates :investor_type, presence: true, inclusion: { in: %w[SuperAdmin Model] }
  validates :shares, numericality: { greater_than_or_equal_to: 0 }
end
