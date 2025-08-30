class InvestorLevel
  belongs_to :investor
  enum level: { super_admin: 0, continent_admin: 1, country_admin: 2, model_admin: 3 }

  validates :level, presence: true
end
