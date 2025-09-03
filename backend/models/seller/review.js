// backend/models/seller/Review.js
import { Model } from "objection"

export class Review extends Model {
  static get tableName() { return "reviews" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Customer } = require("./Customer")

    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: { from: "reviews.product_id", to: "products.id" }
      },
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: { from: "reviews.customer_id", to: "customers.id" }
      }
    }
  }
}
