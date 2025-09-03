// backend/models/seller/Order.js
import { Model } from "objection"

export class Order extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { Customer } = require("./Customer")
    const { Product } = require("./Product")
    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: { from: "orders.customer_id", to: "customers.id" }
      },
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "orders.id", to: "products.order_id" }
      }
    }
  }
}
