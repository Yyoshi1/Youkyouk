class RolesPermissions
  def self.assign_permission(role, permission)
    return false if permission.level > role.admin.level
    role.permissions << permission
    role.save
  end

  def self.user_has_permission?(user, permission_name)
    user.admin? && user.role.permissions.exists?(name: permission_name)
  end
end
