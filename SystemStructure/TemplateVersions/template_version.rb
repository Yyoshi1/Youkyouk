class TemplateVersion < ApplicationRecord
  belongs_to :creator, class_name: "Admin"

  validates :version, presence: true
  validates :content, presence: true

  def activate
    update(active: true)
  end
end
