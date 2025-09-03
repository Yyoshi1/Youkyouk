// backend/models/admin/User.js
import { Model } from "objection"

export class User extends Model {
  static get tableName() { return "users" }

  static get relationMappings() {
    const { Role } = require("./Role")
    const { Order } = require("./Order")
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: { from: "users.role_id", to: "roles.id" }
      },
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "users.id", to: "orders.user_id" }
      }
    }
  }
}
