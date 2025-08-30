class User < ApplicationRecord
  # Relations
  has_many :trips_as_rider, class_name: "Trip", foreign_key: "rider_id", dependent: :destroy
  has_many :audit_logs, dependent: :destroy
  has_many :notification_preferences, dependent: :destroy

  # Validations
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true
  validates :phone_number, presence: true, uniqueness: true

  # Enums
  enum role: { rider: 0, driver: 1, admin: 2 }

  # Callbacks
  before_create :generate_api_token

  private

  def generate_api_token
    self.api_token = SecureRandom.hex(20)
  end
end
