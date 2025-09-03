import { Model } from "objection"

export class Addon extends Model {
  static get tableName() { return "addons" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "addons.admin_id", to: "admins.id" } },
    }
  }
}
