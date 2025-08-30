class Investor < ApplicationRecord
  # Relations
  belongs_to :admin, optional: true
  has_many :shares, dependent: :destroy
  has_many :notifications, as: :recipient

  # Validations
  validates :name, :email, presence: true
  validates :email, uniqueness: true

  # Callbacks
  after_create :send_welcome_notification

  private

  def send_welcome_notification
    NotificationService.send_notification("investor_created", { investor_id: self.id })
  end
end
