// backend/models/seller/Product.js
import { Model } from "objection"

export class Product extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Review } = require("./Review")
    const { Module } = require("./Module")

    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "products.seller_id", to: "sellers.id" }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: { from: "products.id", to: "reviews.product_id" }
      },
      module: {
        relation: Model.BelongsToOneRelation,
        modelClass: Module,
        join: { from: "products.module_id", to: "modules.id" }
      }
    }
  }
}
