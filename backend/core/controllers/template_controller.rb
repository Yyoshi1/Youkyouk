class TemplateController < ActionController::API
  before_action :authenticate_admin!, except: [:index, :show]
  before_action :set_template, only: [:show, :update, :publish, :destroy]

  # GET /templates
  def index
    templates = TemplateVersion.all.order(created_at: :desc)
    render json: templates, status: :ok
  end

  # GET /templates/:id
  def show
    render json: @template, status: :ok
  end

  # POST /templates
  def create
    template = TemplateVersion.new(template_params)
    if template.save
      render json: template, status: :created
    else
      render json: { errors: template.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /templates/:id
  def update
    if @template.update(template_params)
      render json: @template, status: :ok
    else
      render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /templates/:id/publish
  def publish
    # mark as published and push to editors via SyncService
    @template.published_at = Time.current
    if @template.save
      SyncService.push_template_changes(@template)
      render json: { message: 'Template published and pushed' }, status: :ok
    else
      render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /templates/:id
  def destroy
    @template.destroy
    render json: { message: 'Template deleted' }, status: :ok
  end

  private

  def set_template
    @template = TemplateVersion.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Template not found' }, status: :not_found
  end

  def template_params
    params.require(:template_version).permit(:name, :version, :content, :investor_id)
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
