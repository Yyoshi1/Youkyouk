import { Model } from "objection"

export class YoukyoukSeller extends Model {
  static get tableName() { return "sellers" }

  static get relationMappings() {
    const { YoukyoukProduct } = require("./YoukyoukProduct")
    const { YoukyoukOrder } = require("./YoukyoukOrder")
    const { YoukyoukPromotion } = require("./YoukyoukPromotion")
    const { YoukyoukNotification } = require("./YoukyoukNotification")
    const { YoukyoukMessage } = require("./YoukyoukMessage")
    const { YoukyoukSettings } = require("./YoukyoukSettings")

    return {
      products: { relation: Model.HasManyRelation, modelClass: YoukyoukProduct, join: { from: "sellers.id", to: "products.seller_id" } },
      orders: { relation: Model.HasManyRelation, modelClass: YoukyoukOrder, join: { from: "sellers.id", to: "orders.seller_id" } },
      promotions: { relation: Model.HasManyRelation, modelClass: YoukyoukPromotion, join: { from: "sellers.id", to: "promotions.seller_id" } },
      notifications: { relation: Model.HasManyRelation, modelClass: YoukyoukNotification, join: { from: "sellers.id", to: "notifications.seller_id" } },
      messages: { relation: Model.HasManyRelation, modelClass: YoukyoukMessage, join: { from: "sellers.id", to: "messages.seller_id" } },
      settings: { relation: Model.HasOneRelation, modelClass: YoukyoukSettings, join: { from: "sellers.id", to: "settings.seller_id" } }
    }
  }
}
