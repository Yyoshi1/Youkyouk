class Driver < User
  # Relations
  has_many :trips, foreign_key: "driver_id"
  has_many :vehicles, dependent: :destroy

  # Validations
  validates :license_number, presence: true, uniqueness: true
end
