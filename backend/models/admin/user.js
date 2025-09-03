import { Model } from "objection"

export class User extends Model {
  static get tableName() { return "users" }

  static get relationMappings() {
    const { Role } = require("./Role")
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
      }
    }
  }
}
