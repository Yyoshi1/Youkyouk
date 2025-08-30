class Trip < ApplicationRecord
  # Relations
  belongs_to :rider, class_name: "Rider"
  belongs_to :driver, class_name: "Driver", optional: true
  has_many :payments, dependent: :destroy
  has_many :audit_logs, as: :trackable

  # Validations
  validates :start_location, :end_location, :price_cents, presence: true
  validates :status, inclusion: { in: %w[pending ongoing completed cancelled] }

  # Enums
  enum payment_status: { unpaid: 0, paid: 1, refunded: 2 }
  enum status: { pending: 0, ongoing: 1, completed: 2, cancelled: 3 }
end
