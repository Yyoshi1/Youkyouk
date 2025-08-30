# frozen_string_literal: true

require 'jwt'

class AuthController < ActionController::API
  before_action :authenticate_request!, only: [:me]

  # POST /auth/register
  def register
    user = User.new(register_params)
    if user.save
      render json: { id: user.id, email: user.email }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /auth/login
  def login
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = jwt_encode(user_id: user.id)
      render json: { token: token, user: { id: user.id, email: user.email, role: user.role } }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # GET /auth/me
  def me
    render json: { user: @current_user.slice(:id, :email, :name, :role) }, status: :ok
  end

  private

  def register_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end

  def jwt_secret
    ENV['SECRET_KEY_BASE'] || Rails.application.credentials.secret_key_base
  end

  def jwt_encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, jwt_secret)
  end

  def jwt_decode(token)
    decoded = JWT.decode(token, jwt_secret)[0]
    HashWithIndifferentAccess.new(decoded)
  rescue JWT::DecodeError, JWT::ExpiredSignature
    nil
  end

  def authenticate_request!
    header = request.headers['Authorization']
    if header.present?
      token = header.split(' ').last
      decoded = jwt_decode(token)
      if decoded && decoded[:user_id]
        @current_user = User.find_by(id: decoded[:user_id])
        return if @current_user
      end
    end

    render json: { error: 'Not Authorized' }, status: :unauthorized
  end
end
