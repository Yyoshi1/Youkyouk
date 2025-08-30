class RiderTrip < Trip
  # Relations
  belongs_to :rider, class_name: "Rider"
  belongs_to :driver, class_name: "Driver", optional: true

  # Validations
  validates :start_location, :end_location, :price_cents, presence: true

  # Callbacks
  after_create :notify_driver

  private

  def notify_driver
    NotificationService.send_notification("new_trip", { trip_id: self.id })
  end
end
