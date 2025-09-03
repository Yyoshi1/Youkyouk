import { Model } from "objection"

export class Seller extends Model {
  static get tableName() { return "sellers" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Order } = require("./Order")
    const { Notification } = require("./Notification")
    return {
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "sellers.id", to: "products.seller_id" } },
      orders: { relation: Model.HasManyRelation, modelClass: Order, join: { from: "sellers.id", to: "orders.seller_id" } },
      notifications: { relation: Model.HasManyRelation, modelClass: Notification, join: { from: "sellers.id", to: "notifications.seller_id" } }
    }
  }
}
