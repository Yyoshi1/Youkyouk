import { Model } from "objection"

export class Order extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    const { Customer } = require("./Customer")
    const { OrderItem } = require("./OrderItem")
    const { Payment } = require("./Payment")

    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "orders.admin_id", to: "admins.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "orders.customer_id", to: "customers.id" } },
      items: { relation: Model.HasManyRelation, modelClass: OrderItem, join: { from: "orders.id", to: "order_items.order_id" } },
      payments: { relation: Model.HasManyRelation, modelClass: Payment, join: { from: "orders.id", to: "payments.order_id" } },
    }
  }
}
