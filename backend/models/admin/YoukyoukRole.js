import { Model } from "objection"

export class YoukyoukRole extends Model {
  static get tableName() { return "youkyouk_roles" }

  static get relationMappings() {
    const { YoukyoukUser } = require("./YoukyoukUser")
    const { YoukyoukPermission } = require("./YoukyoukPermission")
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukUser,
        join: {
          from: "youkyouk_roles.id",
          through: {
            from: "youkyouk_user_roles.role_id",
            to: "youkyouk_user_roles.user_id"
          },
          to: "youkyouk_users.id"
        }
      },
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukPermission,
        join: {
          from: "youkyouk_roles.id",
          through: {
            from: "youkyouk_role_permissions.role_id",
            to: "youkyouk_role_permissions.permission_id"
          },
          to: "youkyouk_permissions.id"
        }
      }
    }
  }
}
