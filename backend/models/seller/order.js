import { Model } from "objection"

export class Order extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Customer } = require("./Customer")
    const { OrderItem } = require("./OrderItem")
    const { Payment } = require("./Payment")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "orders.seller_id", to: "sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "orders.customer_id", to: "customers.id" } },
      items: { relation: Model.HasManyRelation, modelClass: OrderItem, join: { from: "orders.id", to: "order_items.order_id" } },
      payments: { relation: Model.HasManyRelation, modelClass: Payment, join: { from: "orders.id", to: "payments.order_id" } },
    }
  }
}
