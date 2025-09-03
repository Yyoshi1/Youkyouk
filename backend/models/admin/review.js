// backend/models/admin/Review.js
import { Model } from "objection"

export class Review extends Model {
  static get tableName() { return "reviews" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { User } = require("./User")
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: { from: "reviews.product_id", to: "products.id" }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: { from: "reviews.user_id", to: "users.id" }
      }
    }
  }
}
