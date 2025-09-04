import { Model } from "objection"

export class YoukyoukProduct extends Model {
  static get tableName() { return "youkyouk_products" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukCategory } = require("./YoukyoukCategory")
    const { YoukyoukReview } = require("./YoukyoukReview")
    
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_products.seller_id", to: "youkyouk_sellers.id" } },
      category: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCategory, join: { from: "youkyouk_products.category_id", to: "youkyouk_categories.id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: YoukyoukReview, join: { from: "youkyouk_products.id", to: "youkyouk_reviews.product_id" } }
    }
  }
}
