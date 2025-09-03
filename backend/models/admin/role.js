// backend/models/admin/Role.js
import { Model } from "objection"

export class Role extends Model {
  static get tableName() { return "roles" }

  static get relationMappings() {
    const { Permission } = require("./Permission")
    const { User } = require("./User")
    return {
      permissions: {
        relation: Model.HasManyRelation,
        modelClass: Permission,
        join: { from: "roles.id", to: "permissions.role_id" }
      },
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: { from: "roles.id", to: "users.role_id" }
      }
    }
  }
}
