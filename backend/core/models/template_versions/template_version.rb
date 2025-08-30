class TemplateVersion < ApplicationRecord
  # Relations
  belongs_to :creator, class_name: "Admin"
  
  # Validations
  validates :version, presence: true
  validates :content, presence: true

  # Callbacks
  after_save :push_changes

  private

  def push_changes
    SyncService.push_template_changes(self)
  end
end
