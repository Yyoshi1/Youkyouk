class InvestorManagement
  def self.assign_investor_to_model(investor, model)
    investor.update(model_name: model.name)
  end

  def self.total_shares(model)
    PartialModelInvestor.where(model_name: model.name).sum(:share_percentage)
  end
end
