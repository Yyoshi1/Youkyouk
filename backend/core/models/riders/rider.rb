class Rider < User
  # Relations
  has_many :trips, foreign_key: "rider_id"
  has_one :wallet, dependent: :destroy

  # Callbacks
  after_create :create_wallet

  private

  def create_wallet
    Wallet.create!(user: self, balance_cents: 0)
  end
end
