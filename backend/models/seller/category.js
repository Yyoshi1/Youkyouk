import { Model } from "objection"

export class Category extends Model {
  static get tableName() { return "categories" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Product } = require("./Product")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "categories.seller_id", to: "sellers.id" } },
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "categories.id", to: "products.category_id" } }
    }
  }
}
