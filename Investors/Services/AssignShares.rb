class AssignShares
  def self.call(investor, share)
    investor.update(share_percentage: share)
  end
end
