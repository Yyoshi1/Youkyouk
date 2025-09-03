// backend/models/admin/Shipping.js
import { Model } from "objection"

export class Shipping extends Model {
  static get tableName() { return "shippings" }

  static get relationMappings() {
    const { Order } = require("./Order")
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "shippings.id", to: "orders.shipping_id" }
      }
    }
  }
}
