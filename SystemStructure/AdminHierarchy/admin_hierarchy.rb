class AdminHierarchy
  has_many :sub_admins, class_name: "Admin", foreign_key: "parent_id"
  belongs_to :super_admin, class_name: "Admin", optional: true

  def can_manage?(admin)
    # 
    admin.level < self.level
  end
end
