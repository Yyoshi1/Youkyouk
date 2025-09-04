import { Model } from "objection"

export class YoukyoukReview extends Model {
  static get tableName() { return "reviews" }

  static get relationMappings() {
    const { YoukyoukProduct } = require("./YoukyoukProduct")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")
    return {
      product: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukProduct, join: { from: "reviews.product_id", to: "products.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCustomer, join: { from: "reviews.customer_id", to: "customers.id" } }
    }
  }
}
