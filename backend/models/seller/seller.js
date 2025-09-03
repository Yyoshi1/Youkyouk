import { Model } from "objection"

export class Seller extends Model {
  static get tableName() { return "sellers" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Order } = require("./Order")
    const { Promotion } = require("./Promotion")
    const { Notification } = require("./Notification")
    const { Message } = require("./Message")
    const { Settings } = require("./Settings")
    return {
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "sellers.id", to: "products.seller_id" } },
      orders: { relation: Model.HasManyRelation, modelClass: Order, join: { from: "sellers.id", to: "orders.seller_id" } },
      promotions: { relation: Model.HasManyRelation, modelClass: Promotion, join: { from: "sellers.id", to: "promotions.seller_id" } },
      notifications: { relation: Model.HasManyRelation, modelClass: Notification, join: { from: "sellers.id", to: "notifications.seller_id" } },
      messages: { relation: Model.HasManyRelation, modelClass: Message, join: { from: "sellers.id", to: "messages.seller_id" } },
      settings: { relation: Model.HasOneRelation, modelClass: Settings, join: { from: "sellers.id", to: "settings.seller_id" } }
    }
  }
}
