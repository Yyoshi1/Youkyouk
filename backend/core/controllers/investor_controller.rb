class InvestorController < ActionController::API
  before_action :authenticate_admin!, except: [:index, :show]
  before_action :set_investor, only: [:show, :update, :destroy]

  # GET /investors
  def index
    investors = Investor.all
    render json: investors, status: :ok
  end

  # GET /investors/:id
  def show
    render json: @investor, status: :ok
  end

  # POST /investors
  def create
    investor = Investor.new(investor_params)
    if investor.save
      render json: investor, status: :created
    else
      render json: { errors: investor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /investors/:id
  def update
    if @investor.update(investor_params)
      render json: @investor, status: :ok
    else
      render json: { errors: @investor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /investors/:id
  def destroy
    @investor.destroy
    render json: { message: 'Investor deleted' }, status: :ok
  end

  private

  def set_investor
    @investor = Investor.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Investor not found' }, status: :not_found
  end

  def investor_params
    params.require(:investor).permit(:name, :investor_type, :shares, :contact_email)
  end

  def authenticate_admin!
    header = request.headers['Authorization']
    token = header.split(' ').last if header.present?
    decoded = decode_token(token)
    unless decoded && decoded[:user_id]
      render json: { error: 'Not authorized' }, status: :unauthorized and return
    end
    @current_user = User.find_by(id: decoded[:user_id])
    render json: { error: 'Forbidden' }, status: :forbidden and return unless @current_user&.admin?
  rescue
    render json: { error: 'Not authorized' }, status: :unauthorized
  end

  def decode_token(token)
    secret = ENV['SECRET_KEY_BASE'] || Rails.application.credentials.secret_key_base
    JWT.decode(token, secret)[0].with_indifferent_access
  rescue
    nil
  end
end
