// backend/models/admin/Permission.js
import { Model } from "objection"

export class Permission extends Model {
  static get tableName() { return "permissions" }

  static get relationMappings() {
    const { Role } = require("./Role")
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: { from: "permissions.role_id", to: "roles.id" }
      }
    }
  }
}
