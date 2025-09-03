import { Model } from "objection"

export class Notification extends Model {
  static get tableName() { return "notifications" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Order } = require("./Order")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "notifications.seller_id", to: "sellers.id" } },
      order: { relation: Model.BelongsToOneRelation, modelClass: Order, join: { from: "notifications.order_id", to: "orders.id" } },
    }
  }
}
