import { Model } from "objection"

export class Order extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { OrderItem } = require("../OrderItem")  // OrderItem مشترك مع المستخدم
    const { User } = require("../../User")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "orders.seller_id", to: "sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: User, join: { from: "orders.user_id", to: "users.id" } },
      items: { relation: Model.HasManyRelation, modelClass: OrderItem, join: { from: "orders.id", to: "order_items.order_id" } }
    }
  }
}
