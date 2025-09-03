// backend/models/seller/Promotion.js
import { Model } from "objection"

export class Promotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Seller } = require("./Seller")

    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "promotions.id", to: "products.promotion_id" }
      },
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "promotions.seller_id", to: "sellers.id" }
      }
    }
  }
}
