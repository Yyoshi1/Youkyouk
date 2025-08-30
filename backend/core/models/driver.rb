class Driver < ApplicationRecord
  belongs_to :user
  has_many :trips

  validates :user_id, presence: true
  validates :vehicle_number, presence: true, uniqueness: true
end
