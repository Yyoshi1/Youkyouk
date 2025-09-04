import { Model } from "objection"

export class YoukyoukReview extends Model {
  static get tableName() { return "youkyouk_reviews" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukProduct } = require("./YoukyoukProduct")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")
    
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_reviews.seller_id", to: "youkyouk_sellers.id" } },
      product: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukProduct, join: { from: "youkyouk_reviews.product_id", to: "youkyouk_products.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCustomer, join: { from: "youkyouk_reviews.customer_id", to: "youkyouk_customers.id" } }
    }
  }
}
