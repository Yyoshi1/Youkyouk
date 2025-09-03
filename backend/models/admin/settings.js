import { Model } from "objection"

export class Settings extends Model {
  static get tableName() { return "settings" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "settings.admin_id", to: "admins.id" } },
    }
  }
}
