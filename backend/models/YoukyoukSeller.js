import { Model } from "objection"

export class YoukyoukSeller extends Model {
  static get tableName() { return "youkyouk_sellers" }

  static get relationMappings() {
    const { YoukyoukProduct } = require("./YoukyoukProduct")
    const { YoukyoukOrder } = require("./YoukyoukOrder")
    const { YoukyoukPromotion } = require("./YoukyoukPromotion")
    const { YoukyoukNotification } = require("./YoukyoukNotification")
    const { YoukyoukMessage } = require("./YoukyoukMessage")
    const { YoukyoukSettings } = require("./YoukyoukSettings")
    const { YoukyoukReview } = require("./YoukyoukReview")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")
    
    return {
      products: { relation: Model.HasManyRelation, modelClass: YoukyoukProduct, join: { from: "youkyouk_sellers.id", to: "youkyouk_products.seller_id" } },
      orders: { relation: Model.HasManyRelation, modelClass: YoukyoukOrder, join: { from: "youkyouk_sellers.id", to: "youkyouk_orders.seller_id" } },
      promotions: { relation: Model.HasManyRelation, modelClass: YoukyoukPromotion, join: { from: "youkyouk_sellers.id", to: "youkyouk_promotions.seller_id" } },
      notifications: { relation: Model.HasManyRelation, modelClass: YoukyoukNotification, join: { from: "youkyouk_sellers.id", to: "youkyouk_notifications.seller_id" } },
      messages: { relation: Model.HasManyRelation, modelClass: YoukyoukMessage, join: { from: "youkyouk_sellers.id", to: "youkyouk_messages.seller_id" } },
      settings: { relation: Model.HasOneRelation, modelClass: YoukyoukSettings, join: { from: "youkyouk_sellers.id", to: "youkyouk_settings.seller_id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: YoukyoukReview, join: { from: "youkyouk_sellers.id", to: "youkyouk_reviews.seller_id" } },
      customers: { relation: Model.HasManyRelation, modelClass: YoukyoukCustomer, join: { from: "youkyouk_sellers.id", to: "youkyouk_customers.seller_id" } }
    }
  }
}
