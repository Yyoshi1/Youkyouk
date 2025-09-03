import { Model } from "objection"

export class Seller extends Model {
  static get tableName() { return "sellers" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Order } = require("./Order")
    const { Notification } = require("./Notification")
    const { Plugin } = require("./Plugin")
    const { Settings } = require("./Settings")
    const { Promotion } = require("./Promotion")
    const { Message } = require("./Message")
    
    return {
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "sellers.id", to: "products.seller_id" } },
      orders: { relation: Model.HasManyRelation, modelClass: Order, join: { from: "sellers.id", to: "orders.seller_id" } },
      notifications: { relation: Model.HasManyRelation, modelClass: Notification, join: { from: "sellers.id", to: "notifications.seller_id" } },
      plugins: { relation: Model.HasManyRelation, modelClass: Plugin, join: { from: "sellers.id", to: "plugins.seller_id" } },
      settings: { relation: Model.HasOneRelation, modelClass: Settings, join: { from: "sellers.id", to: "settings.seller_id" } },
      promotions: { relation: Model.HasManyRelation, modelClass: Promotion, join: { from: "sellers.id", to: "promotions.seller_id" } },
      messages: { relation: Model.HasManyRelation, modelClass: Message, join: { from: "sellers.id", to: "messages.seller_id" } }
    }
  }
}
