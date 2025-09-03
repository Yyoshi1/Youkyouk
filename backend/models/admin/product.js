// backend/models/admin/Product.js
import { Model } from "objection"

export class Product extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { Category } = require("./Category")
    const { Seller } = require("./Seller")
    const { Review } = require("./Review")
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: { from: "products.category_id", to: "categories.id" }
      },
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "products.seller_id", to: "sellers.id" }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: { from: "products.id", to: "reviews.product_id" }
      }
    }
  }
}
