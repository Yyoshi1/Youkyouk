class PartialModelInvestor < Investor
  # Owns partial shares of a model
  validates :model_name, presence: true
  validates :share_percentage, presence: true, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
end
