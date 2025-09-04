import { Model } from "objection"

export class YoukyoukCustomer extends Model {
  static get tableName() { return "youkyouk_customers" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukOrder } = require("./YoukyoukOrder")
    const { YoukyoukReview } = require("./YoukyoukReview")
    
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_customers.seller_id", to: "youkyouk
        .id" } },
      orders: { relation: Model.HasManyRelation, modelClass: YoukyoukOrder, join: { from: "youkyouk_customers.id", to: "youkyouk_orders.customer_id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: YoukyoukReview, join: { from: "youkyouk_customers.id", to: "youkyouk_reviews.customer_id" } }
    }
  }
}
