class AdminController < ActionController::API
  before_action :authenticate_admin!
  before_action :set_admin, only: [:show, :update, :destroy, :assign_permissions]

  # GET /admin
  def index
    admins = Admin.includes(:user).all
    render json: admins.as_json(include: { user: { only: [:id, :email, :name] } }), status: :ok
  end

  # GET /admin/:id
  def show
    render json: @admin.as_json(include: { user: { only: [:id, :email, :name] } }), status: :ok
  end

  # POST /admin
  def create
    user = User.new(user_params)
    user.role = 'admin'
    if user.save
      admin = Admin.new(user: user, level: params[:level] || 'assistant')
      if admin.save
        render json: { admin: admin, user: user }, status: :created
      else
        user.destroy
        render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /admin/:id
  def update
    if @admin.user.update(user_update_params) && @admin.update(admin_update_params)
      render json: { admin: @admin }, status: :ok
    else
      render json: { errors: @admin.errors.full_messages + @admin.user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /admin/:id
  def destroy
    user = @admin.user
    @admin.destroy
    user.destroy
    render json: { message: 'Admin removed' }, status: :ok
  end

  # POST /admin/:id/assign_permissions
  def assign_permissions
    rp = @admin.roles_permissions.find_or_initialize_by(role_name: params[:role_name])
    rp.permissions = params[:permissions] || {}
    if rp.save
      render json: { roles_permission: rp }, status: :ok
    else
      render json: { errors: rp.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_admin
    @admin = Admin.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Admin not found' }, status: :not_found
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def user_update_params
    params.require(:user).permit(:name, :email)
  end

  def admin_update_params
    params.permit(:level)
  end

  # simple admin auth: check JWT and role
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
