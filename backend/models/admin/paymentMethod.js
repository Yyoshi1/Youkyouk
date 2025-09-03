// backend/models/admin/PaymentMethod.js
import { Model } from "objection"

export class PaymentMethod extends Model {
  static get tableName() { return "payment_methods" }

  static get relationMappings() {
    const { Order } = require("./Order")
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "payment_methods.id", to: "orders.payment_id" }
      }
    }
  }
}
