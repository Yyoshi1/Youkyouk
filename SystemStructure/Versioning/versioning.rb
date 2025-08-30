class Versioning
  def self.current_version
    TemplateVersion.order(created_at: :desc).first.version
  end

  def self.rollback(version)
    template = TemplateVersion.find_by(version: version)
    template.activate if template
  end
end
