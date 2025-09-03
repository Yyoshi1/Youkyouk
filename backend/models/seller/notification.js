import { Model } from "objection"

export class Notification extends Model {
  static get tableName() { return "notifications" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "notifications.seller_id", to: "sellers.id" } }
    }
  }
}
