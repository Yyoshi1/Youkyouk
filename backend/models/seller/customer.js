// backend/models/seller/Customer.js
import { Model } from "objection"

export class Customer extends Model {
  static get tableName() { return "customers" }

  static get relationMappings() {
    const { Order } = require("./Order")
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "customers.id", to: "orders.customer_id" }
      }
    }
  }
}
