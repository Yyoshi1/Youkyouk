// backend/models/admin/Order.js
import { Model } from "objection"

export class Order extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { User } = require("./User")
    const { OrderItem } = require("./OrderItem")
    const { Payment } = require("./PaymentMethod")

    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: { from: "orders.user_id", to: "users.id" }
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: OrderItem,
        join: { from: "orders.id", to: "order_items.order_id" }
      },
      payments: {
        relation: Model.HasManyRelation,
        modelClass: Payment,
        join: { from: "orders.id", to: "payments.order_id" }
      }
    }
  }
}
