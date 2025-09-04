import { Model } from "objection"

export class YoukyoukProduct extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukReview } = require("./YoukyoukReview")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "products.seller_id", to: "sellers.id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: YoukyoukReview, join: { from: "products.id", to: "reviews.product_id" } }
    }
  }
}
