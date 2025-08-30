class Trip < ApplicationRecord
  belongs_to :rider
  belongs_to :driver

  # Trip status
  enum status: { pending: 'pending', ongoing: 'ongoing', completed: 'completed', cancelled: 'cancelled' }

  validates :start_time, :end_time, presence: true
  validates :start_location, :end_location, presence: true
end
