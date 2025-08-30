class DriverTrip < Trip
  # Relations
  belongs_to :driver
  belongs_to :rider, class_name: "Rider"

  # Validations
  validates :status, inclusion: { in: %w[pending ongoing completed cancelled] }

  # Callbacks
  after_update :notify_rider

  private

  def notify_rider
    NotificationService.send_notification("trip_status_changed", { trip_id: self.id, status: self.status })
  end
end
