import { Model } from "objection"

export class YoukyoukPermission extends Model {
  static get tableName() { return "youkyouk_permissions" }

  static get relationMappings() {
    const { YoukyoukUser } = require("./YoukyoukUser")
    const { YoukyoukRole } = require("./YoukyoukRole")
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukUser,
        join: {
          from: "youkyouk_permissions.id",
          through: {
            from: "youkyouk_user_permissions.permission_id",
            to: "youkyouk_user_permissions.user_id"
          },
          to: "youkyouk_users.id"
        }
      },
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: YoukyoukRole,
        join: {
          from: "youkyouk_permissions.id",
          through: {
            from: "youkyouk_role_permissions.permission_id",
            to: "youkyouk_role_permissions.role_id"
          },
          to: "youkyouk_roles.id"
        }
      }
    }
  }
}
