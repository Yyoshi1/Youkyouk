class User < ApplicationRecord
  # Associations
  has_one :rider
  has_one :driver
  has_one :admin
  has_secure_password

  # Validations
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :role, presence: true, inclusion: { in: %w[rider driver admin investor] }

  # Enum roles
  enum role: { rider: 'rider', driver: 'driver', admin: 'admin', investor: 'investor' }
end
