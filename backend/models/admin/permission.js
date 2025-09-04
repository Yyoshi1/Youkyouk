import { Model } from "objection"

export class Permission extends Model {
  static get tableName() { return "permissions" }

  static get relationMappings() {
    const { User } = require("./User")
    const { Role } = require("./Role")
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "permissions.id",
          through: {
            from: "user_permissions.permission_id",
            to: "user_permissions.user_id"
          },
          to: "users.id"
        }
      },
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: "permissions.id",
          through: {
            from: "role_permissions.permission_id",
            to: "role_permissions.role_id"
          },
          to: "roles.id"
        }
      }
    }
  }
}
