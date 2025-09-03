import { Model } from "objection"

export class Notification extends Model {
  static get tableName() { return "notifications" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "notifications.admin_id", to: "admins.id" } },
    }
  }
}
