class ContinentInvestor < Investor
  # Relations
  has_many :country_investors, class_name: "CountryInvestor", foreign_key: "parent_id"

  # Validations
  validates :continent_name, presence: true
end
