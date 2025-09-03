// backend/models/admin/Notification.js
import { Model } from "objection"

export class Notification extends Model {
  static get tableName() { return "notifications" }

  static get relationMappings() {
    const { User } = require("./User")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: { from: "notifications.user_id", to: "users.id" }
      }
    }
  }
}
