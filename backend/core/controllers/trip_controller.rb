class TripController < ActionController::API
  before_action :authenticate_request!
  before_action :set_trip, only: [:show, :update, :cancel]

  # GET /trips
  def index
    if current_user.admin?
      trips = Trip.all.order(created_at: :desc)
    elsif current_user.driver?
      trips = current_user.driver.trips.order(created_at: :desc)
    elsif current_user.rider?
      trips = current_user.rider.trips.order(created_at: :desc)
    else
      trips = []
    end

    render json: trips, status: :ok
  end

  # GET /trips/:id
  def show
    render json: @trip, status: :ok
  end

  # POST /trips
  def create
    # expected payload: rider_id, driver_id (optional), start_location, end_location, start_time, end_time
    trip = Trip.new(trip_params)
    if trip.save
      # Enqueue notifications, pricing calc etc.
      NotificationJob.perform_later('trip_created', trip.id)
      render json: trip, status: :created
    else
      render json: { errors: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /trips/:id
  def update
    if @trip.update(trip_params)
      render json: @trip, status: :ok
    else
      render json: { errors: @trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /trips/:id/cancel
  def cancel
    if @trip.update(status: 'cancelled')
      NotificationJob.perform_later('trip_cancelled', @trip.id)
      render json: { message: 'Trip cancelled' }, status: :ok
    else
      render json: { errors: @trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Trip not found' }, status: :not_found
  end

  def trip_params
    params.require(:trip).permit(:rider_id, :driver_id, :start_location, :end_location, :start_time, :end_time, :status, :price_cents)
  end

  # authenticate_request! and current_user helpers
  def authenticate_request!
    header = request.headers['Authorization']
    if header.present?
      token = header.split(' ').last
      decoded = decode_token(token)
      if decoded && decoded[:user_id]
        @current_user = User.find_by(id: decoded[:user_id])
        return if @current_user
      end
    end
    render json: { error: 'Not Authorized' }, status: :unauthorized
  end

  def decode_token(token)
    secret = ENV['SECRET_KEY_BASE'] || Rails.application.credentials.secret_key_base
    JWT.decode(token, secret)[0].with_indifferent_access
  rescue
    nil
  end

  def current_user
    @current_user
  end
end
