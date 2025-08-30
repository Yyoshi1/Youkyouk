class FullModelInvestor < Investor
  # Owns full rights over the assigned model
  validates :model_name, presence: true
end
