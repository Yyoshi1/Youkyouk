import { Model } from "objection"

export class Role extends Model {
  static get tableName() { return "roles" }

  static get relationMappings() {
    const { User } = require("./User")
    const { Permission } = require("./Permission")
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "roles.id",
          through: {
            from: "user_roles.role_id",
            to: "user_roles.user_id"
          },
          to: "users.id"
        }
      },
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: Permission,
        join: {
          from: "roles.id",
          through: {
            from: "role_permissions.role_id",
            to: "role_permissions.permission_id"
          },
          to: "permissions.id"
        }
      }
    }
  }
}
