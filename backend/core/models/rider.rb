class Rider < ApplicationRecord
  belongs_to :user
  has_many :trips

  validates :user_id, presence: true
end
