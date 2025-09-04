import { Model } from "objection"

export class YoukyoukReview extends Model {
  static get tableName() { return "reviews" }

  static get relationMappings() {
    const { YoukyoukProduct } = require("./YoukyoukProduct")
    const { YoukyoukSeller } = require("./YoukyoukSeller")

    return {
      product: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukProduct, join: { from: "reviews.product_id", to: "products.id" } },
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "reviews.seller_id", to: "sellers.id" } }
    }
  }
}
