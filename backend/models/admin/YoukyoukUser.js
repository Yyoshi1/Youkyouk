import { Model } from "objection"

export class YoukyoukUser extends Model {
  static get tableName() { return "youkyouk_users" }

  static get relationMappings() {
    const { YoukyoukRole } = require("./YoukyoukRole")
    const { YoukyoukPermission } = require("./YoukyoukPermission")
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukRole,
        join: {
          from: "youkyouk_users.id",
          through: {
            from: "youkyouk_user_roles.user_id",
            to: "youkyouk_user_roles.role_id"
          },
          to: "youkyouk_roles.id"
        }
      },
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukPermission,
        join: {
          from: "youkyouk_users.id",
          through: {
            from: "youkyouk_user_permissions.user_id",
            to: "youkyouk_user_permissions.permission_id"
          },
          to: "youkyouk_permissions.id"
        }
      }
    }
  }
}
