class TemplateVersion < ApplicationRecord
  belongs_to :investor, optional: true

  validates :name, presence: true
  validates :version, presence: true
  validates :content, presence: true
end
