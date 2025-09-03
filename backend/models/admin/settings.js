// backend/models/admin/Settings.js
import { Model } from "objection"

export class Settings extends Model {
  static get tableName() { return "settings" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "settings.seller_id", to: "sellers.id" }
      }
    }
  }
}
