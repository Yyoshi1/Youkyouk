import { Model } from "objection"

export class User extends Model {
  static get tableName() { return "users" }

  static get relationMappings() {
    const { Role } = require("./Role")
    const { Permission } = require("./Permission")
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: "users.id",
          through: {
            from: "user_roles.user_id",
            to: "user_roles.role_id"
          },
          to: "roles.id"
        }
      },
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: Permission,
        join: {
          from: "users.id",
          through: {
            from: "user_permissions.user_id",
            to: "user_permissions.permission_id"
          },
          to: "permissions.id"
        }
      }
    }
  }
}
