class TripAnalytics
  def self.total_trips
    Trip.count
  end

  def self.completed_trips
    Trip.where(status: 'completed').count
  end

  def self.revenue
    Trip.where(status: 'completed').sum(:price_cents)
  end

  def self.average_trip_price
    Trip.where(status: 'completed').average(:price_cents)
  end

  def self.trips_by_driver(driver_id)
    Trip.where(driver_id: driver_id)
  end

  def self.trips_by_rider(rider_id)
    Trip.where(rider_id: rider_id)
  end
end
